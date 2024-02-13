require("dotenv").config();
//importing Models
const {
  adminApp,
  app,
  user,
  topApp,
  office,
  addressDBS,
} = require("../models");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const appError = require("../utils/appError");

//! Function to create JWT Tocken
const signTocken = (id, dvToken) => {
  return sign({ id, dvToken }, process.env.JWT_ACCESS_SECRET);
};
//! Return Function
let returnFunction = (status, message, data, error) => {
  return {
    status: `${status}`,
    message: `${message}`,
    data: data,
    error: "",
  };
};
// ! Module 1: Agent Dashboard
/**
  1:Suite Tools
*/
exports.suiteTools = async (req, res, next) => {
  const suiteTools = await adminApp.findAll({
    include: {
      model: app,
    },
  });
  const arrayOfApps = suiteTools.map((item) => item.app);
  return res.json(returnFunction("1", "All Suite Tools", arrayOfApps, ""));
};
/**
  2. Show All Apps
*/
exports.allApps = async (req, res, next) => {
  const AllApps = await app.findAll();
  return res.json(returnFunction("1", "All Apps", AllApps, ""));
};
/**
  3. Add Suite Tools
*/
exports.addSuiteTools = async (req, res, next) => {
  const { appId } = req.body;
  const Access = await user.findByPk(req.user.id);
  if (Access.roleId !== 1) {
    return next(new appError("Only Admin Can Add The Apps!", 200));
  }
  const count = await adminApp.findAll();
  if (count.length >= 5) {
    return next(new appError("You can add Only 5 Apps", 200));
  }
  const found = count.find((ele) => ele.appId === appId);
  if (found) {
    return next(new appError("App already Exists", 200));
  }
  const suiteTools = await adminApp.create({
    appId,
  });
  return res.json(returnFunction("1", "App Added Successfully!", {}, ""));
};
/**
  3. Add User Top Apps
*/
exports.addtopApp = async (req, res, next) => {
  const { appId } = req.body;
  const count = await topApp.findAll();
  if (count.length >= 5) {
    return next(new appError("You can add Only 5 Apps", 200));
  }
  const found = count.find((ele) => ele.appId === appId);
  if (found) {
    return next(new appError("App already Exists", 200));
  }
  const suiteTools = await topApp.create({
    appId,
    userId: req.user.id,
  });
  return res.json(returnFunction("1", "App Added Successfully!", {}, ""));
};
/**
  1:User  Top Apps
*/
exports.topApp = async (req, res, next) => {
  const suiteTools = await topApp.findAll({
    where: {
      userId: req.user.id,
    },
    include: {
      model: app,
    },
  });
  const arrayOfApps = suiteTools.map((item) => item.app);
  return res.json(returnFunction("1", "User Top Apps", arrayOfApps, ""));
};

// ! Module 2: App Hub
/**
  2. Add App
*/
exports.addApp = async (req, res, next) => {
  const { appName, appDescription, appUrl } = req.body;
  const Access = await user.findByPk(req.user.id);
  if (Access.roleId !== 1) {
    return next(new appError("Only Admin Can Add The Apps!", 200));
  }
  if (!req.file) {
    return next(new appError("Please Upload Picture", 200));
  }

  let tmpPath = req.file.path;
  let logo = tmpPath.replace(/\\/g, "/");

  const count = await app.findAll();
  const found = count.find((ele) => ele.appurl === appUrl);
  if (found) {
    return next(new appError("App already Exists", 200));
  }
  const AppData = await app.create({
    appName,
    appDescription,
    appUrl,
    logo,
  });
  return res.json(returnFunction("1", "App Added Successfully!", {}, ""));
};
/**
  2. Update App
*/
exports.updateApp = async (req, res, next) => {
  const { appId, appName, appDescription, appUrl, updatePic } = req.body;
  const Access = await user.findByPk(req.user.id);
  if (Access.roleId !== 1) {
    return next(new appError("Only Admin Can Update The Apps!", 200));
  }
  if (updatePic) {
    let tmpPath = req.file.path;
    let logo = tmpPath.replace(/\\/g, "/");

    const appData = await app.findByPk({
      appName,
      appDescription,
      appUrl,
      logo
    },{
      where: {
        id: appId,
      },
    });
  }

  const AppData = await app.update(
    {
      appName,
      appDescription,
      appUrl,
    },
    {
      where: {
        id: appId,
      },
    }
  );
  return res.json(returnFunction("1", "App Updated Successfully!", {}, ""));
};

// ! Module 5: Offices
/**
  2. Show All Offices
*/
exports.allOffices = async (req, res, next) => {
  const AllOffices = await office.findAll({
    include: {
      model: addressDBS,
    },
  });
  return res.json(returnFunction("1", "All Offices", AllOffices, ""));
};

// ! Module 6: Agents
/**
  2. Add Agent
*/
exports.addAgent = async (req, res, next) => {
  const {
    nickName,
    firstName,
    lastName,
    email,
    password,
    DOB,
    gender,
    officeId,
  } = req.body;
  const Access = await user.findByPk(req.user.id);
  if (Access.roleId !== 1) {
    return next(new appError("Only Admin Can Add Agents!", 200));
  }
  // if (!req.file) {
  //   return next(new appError("Please Upload Picture", 200));
  // }

  // let tmpPath = req.file.path;
  // let logo = tmpPath.replace(/\\/g, "/");
  console.log(email);
  const EmailExist = await user.findOne({
    where: {
      email,
    },
  });
  if (EmailExist) {
    return next(new appError("Email already Exists", 200));
  }
  const AgentData = await user.create({
    nickName,
    firstName,
    lastName,
    email,
    password,
    DOB,
    gender,
    officeId,
    roleId: 3,
  });
  return res.json(
    returnFunction("1", "Agent Added Successfully!", AgentData, "")
  );
};
/**
  2. Show All Agents
*/
exports.allAgents = async (req, res, next) => {
  const AllAgents = await user.findAll({
    where: {
      roleId: 3,
    },
  });
  return res.json(returnFunction("1", "All Agents", AllAgents, ""));
};
