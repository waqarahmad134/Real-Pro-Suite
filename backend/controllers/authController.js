const { Op } = require("sequelize");
const { user, otpVerification ,permission,rolePermission,role} = require("../models");
const jwt = require("jsonwebtoken");
const appError = require("../utils/appError");
const Email = require("../utils/Email");
const bcrypt = require("bcryptjs");
// OTP generator
const otpGenerator = require("otp-generator");
const {
  registeruserEmail,
  forgetuserEmail,
} = require("../helper/emailsHtml");
//! Function to create JWT Tocken
const signTocken = (id, dvToken) => {
  return jwt.sign({ id, dvToken }, process.env.JWT_ACCESS_SECRET);
};

//! Function to send Tocken in Response
const createSendToken = (user, dvToken, statusCode, res) => {
  const token = signTocken(user.id, dvToken);

  res.status(statusCode).json({
    status: "1",
    message: "user Registered successfully!",
    data: {
      userId: `${user.id}`,
      image: `${user.image}`,
      firstName: `${user.firstName}`,
      lastName: `${user.lastName}`,
      email: `${user.email}`,
      accessToken: token,
      phoneNum: `${user.countryCode} ${user.phoneNum}`,
      joinOn: new Date(),
    },
    error: "",
  });
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
// ! Module 1 : Auth
// ! _________________________________________________________________________________________________________________________________

/*
            4. Login
    ________________________________________
*/
exports.signIn = async (req, res,next) => {
  const { email, password } = req.body;
  const userData = await user.findOne({
    where: { email, status: true },
    include: {
      model: role,
      include: { model: rolePermission, include: { model: permission } },
    }
  });
  if (!userData){
    return next(new appError("User not found , Please enter valid data",200))
  }
  // Checking the password
  let match = await bcrypt.compare(password, userData.password);
  if (!match){
    return next(new appError("Bad credentials , Please enter correct password to continue", 200))
  }
  // Checking the status
  if (!userData.status){
    return next(new appError("Blocked by admin , Please contact admin to continue",200))
  }

  // creating accessToken
  const accessToken = signTocken(userData.id, "dvToken");
  //Adding the online clients to reddis DB for validation process
  let output = {
    id: userData.id,
    name: userData.firstName,
    email: userData.email,
    accessToken,
    role:userData.role
  };


  return res.json(returnFunction("1", "Login Successful", output, ""));
};
