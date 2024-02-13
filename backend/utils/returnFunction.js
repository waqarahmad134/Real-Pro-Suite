const { Op } = require('sequelize');

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

module.exports = {
  createdAt
};
