require('dotenv').config();
const { verify } = require('jsonwebtoken');

module.exports = async function validateToken(req, res, next) {
  try {
    const acccessToken = req.header('accessToken');
    //If no token -- Throw Error
    if (!acccessToken) throw new Error();
    // Verify Token , If not auto Throw Error
    const validToken = verify(acccessToken, process.env.JWT_ACCESS_SECRET);
    req.user = validToken;
    console.log(
      '🚀 ~ file: req.user:',
      req.user.id
    );
    next();
  } catch (error) {
    return res.json({
      status: '0',
      message: 'Access Denied',
      data: {},
      error: 'You are not authorized to access it'
    });
  }
};
