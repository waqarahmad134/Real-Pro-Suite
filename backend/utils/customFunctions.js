const { Op } = require('sequelize');
const fs = require('fs');
const DateManupulation = require('./dateManipulation');
 
function createdAt(month, year) {
  if (month && !year) year = new Date().getFullYear();
  if (month && year) {
    const startDate = new Date(year, month - 1, 1); // Month is 0-based
    const endDate = new Date(year, month, 1, 31, 23, 59, 59, 999); // Get the last day of the specified month
    return {
      [Op.between]: [startDate, endDate]
    };
  }
  if (year) {
    const startDate = new Date(year, 0, 1); // January 1st of the specified year
    const endDate = new Date(year, 11, 31, 23, 59, 59, 999); // December 31st, 23:59:59.999
    return {
      [Op.between]: [startDate, endDate]
    };
  }
  //   if (month) {
  //     const currentYear = new Date().getFullYear(); // Get the current year
  //     const startDate = new Date(2000, month - 1, 1); // Year 2000 is used as a reference
  //     const endDate = new Date(currentYear, month, 0, 23, 59, 59, 999); // Last day of the specified month
  //     return {
  //       [Op.between]: [startDate, endDate]
  //     };
  //   }
  return null;
}
function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
function parseTimeString(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const date = new Date('2023-01-01T00:00:00');
  date.setHours(hours);
  date.setMinutes(minutes);
  return date.getTime();
}

function scheduleSessions(appointment, sessions) {
  const { startTime, endTime, duration: appointmentDuration } = appointment;
  const sessionSchedule = [];

  let currentStartTime = parseTimeString(startTime);

  for (const session of sessions) {
    const { duration: sessionDuration } = session;

    if (currentStartTime + sessionDuration * 60 * 1000 <= parseTimeString(endTime)) {
      const sessionEndTime = currentStartTime + sessionDuration * 60 * 1000;
      sessionSchedule.push({
        startTime: DateManupulation.convertTo24HourFormat(formatTime(currentStartTime)),
        endTime: DateManupulation.convertTo24HourFormat(formatTime(sessionEndTime)),
        duration: sessionDuration,
        on:appointment.on,
        ...session
      });
      currentStartTime = sessionEndTime;
    } else {
      // If session can't fit within the appointment time, break the loop or handle accordingly.
      break;
    }
  }
  return sessionSchedule;
}

function assignEmployeesToServices(employeeData, services) {
  // Iterate over each service
  services.forEach(service => {
    const serviceStartTime = service.startTime;
    const serviceEndTime = service.endTime;
    let assigned = false; // Flag to track if service is assigned to an employee

    // Iterate over each employee
    for (const employee of employeeData) {
      // Check if the employee provides the required service
      const providesService = employee.employeeServices.some(
        empService => empService.service.id === service.serviceId
      );
      console.log("🚀 ~providesService:", providesService,"Employee",employee.id)

      if (!providesService) continue;

      // Check if the employee is available on the specific day
      
      const isAvailableOnDay = employee.times.length > 0 && employee.times.some(time => {
        console.log("🚀 ~ file.. time.openingTime:", time.openingTime)
        console.log("🚀 ~ file.. time.closingTime:", time.closingTime)
        console.log("🚀 ~ file.. serviceStartTime:", serviceStartTime)
        console.log("🚀 ~ file.. serviceEndTime:", serviceEndTime)
        return (
          new Date(`1970-01-01T${serviceStartTime}`) >= new Date(`1970-01-01T${time.openingTime}`) && new Date(`1970-01-01T${serviceEndTime}`) <= new Date(`1970-01-01T${time.closingTime}`)
          );
        });
        console.log("🚀 ~ file: customFunctions.js:88 ~ assignEmployeesToServices ~ isAvailableOnDay:", isAvailableOnDay)
      // Check if the employee is available during the service time
      const isAvailable =
        isAvailableOnDay &&
        (employee.jobs.length === 0 ||
          !employee.jobs.some(job => {
            const jobStartDateTime = new Date(`1970-01-01T${job.startTime}`);
            const jobEndDateTime = new Date(`1970-01-01T${job.endTime}`);
            const serviceStartDateTime = new Date(`1970-01-01T${serviceStartTime}`);
            const serviceEndDateTime = new Date(`1970-01-01T${serviceEndTime}`);

            return (
              (serviceStartDateTime >= jobStartDateTime &&
                serviceStartDateTime < jobEndDateTime) ||
              (serviceEndDateTime > jobStartDateTime &&
                serviceEndDateTime <= jobEndDateTime)
            );
          }));
          console.log("🚀 ~ Check if the employee is available during the service time", isAvailable)
      // If the employee is available, assign the service and update status
      if (isAvailable) {
        service.employeeId = employee.id;
        service.status = 'assign';
        assigned = true;
        break; // Exit the loop after assigning the service
      }
    }

    // If no available employee is found, mark the service as 'pending'
    if (!assigned) {
      service.status = 'pending';
    }
  });

  return services;
}

// calculateJobTotals for employe details in admin panel
function calculateJobTotals(jobsArray) {
  // Initialize variables to store the totals and counts
  let totalRevenue = 0;
  let revenueLastMonth = 0;
  let totalTip = 0;
  let tipLastMonth = 0;
  let totalJobCount = 0;
  let lastMonthJobCount = 0;

  // Get the current date
  const currentDate = new Date();

  // Calculate the first day of the current month
  const firstDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  // Loop through the jobs array
  jobsArray.forEach(job => {
      // Convert the job date string to a Date object
      const jobDate = new Date(job.on);

      // Check if the job is within the last month
      if (jobDate >= firstDayOfCurrentMonth) {
          revenueLastMonth += parseFloat(job.total);
          tipLastMonth += parseFloat(job.tip);
          lastMonthJobCount++;
      }

      // Accumulate totals for all jobs
      totalRevenue += parseFloat(job.total);
      totalTip += parseFloat(job.tip);
      totalJobCount++;
  });

  // Create and return the result object
  const totalJobs = {
      totalRevenue,
      revenueLastMonth,
      totalTip,
      tipLastMonth,
      totalJobCount,
      lastMonthJobCount,
  };

  return totalJobs;
}

const createDestinationDirectory = (destinationPath, cb) => {
  fs.access(destinationPath, (error) => {
    if (error) {
      // Directory does not exist, create it
      fs.mkdir(destinationPath, { recursive: true }, (err) => {
        if (err) {
          console.error('Error creating destination directory:', err);
          cb(err, null);
        } else {
          cb(null, destinationPath);
        }
      });
    } else {
      // Directory already exists
      cb(null, destinationPath);
    }
  });
};


const peakTimeReportGenerator = (input) => {
  const hourlyCountByDay = {};
 const appointments = JSON.parse(JSON.stringify(input))
    console.log("🚀 ~ file: customFunctions.js:205 ~ peakTimeReportGenerator ~ appointments:", appointments)
    // Process each appointment
    appointments.forEach(appointment => {
      const appointmentTime = new Date(`${appointment.on}T${appointment.startTime}`);
      const appointmentHour = appointmentTime.getHours();
      const appointmentDay = appointment.on;

      hourlyCountByDay[appointmentDay] = hourlyCountByDay[appointmentDay] || {};
      console.log("🚀🚀🚀🚀🚀🚀 hourlyCountByDay[appointmentDay] = hourlyCountByDay[appointmentDay] || {}:", hourlyCountByDay[appointmentDay] = hourlyCountByDay[appointmentDay] || {})
      hourlyCountByDay[appointmentDay][appointmentHour] = (hourlyCountByDay[appointmentDay][appointmentHour] || 0) + 1;
      console.log("🚀 ~🚀 ~🚀 ~🚀 ~🚀 ~🚀 ~", hourlyCountByDay[appointmentDay][appointmentHour] = (hourlyCountByDay[appointmentDay][appointmentHour] || 0) + 1)
  });

  // Create and return the report
  const report = Object.entries(hourlyCountByDay).map(([day, hourlyCount]) => {
      const dailyReport = {
          day,
          hours: Object.entries(hourlyCount).map(([hour, count]) => ({
              start: `${hour}:00`,
              end: `${(parseInt(hour) + 1) % 24}:00`,
              count
          }))
      };
      return dailyReport;
  });
  return report;
};
 
module.exports = {
  createdAt , createDestinationDirectory ,scheduleSessions,assignEmployeesToServices,calculateJobTotals,peakTimeReportGenerator
};
