const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

module.exports = (err, req, res, next) => {
  console.log('🚀🚀🚀 Error handler ', err);

  // Handle SequelizeConnectionRefusedError specifically
  if (err.name === 'SequelizeConnectionRefusedError') {
    return res.status(503).json({
      status: '0',
      message: 'Database not connected -- start server',
      data: {},
      error: 'database error'
    });
  }

  // Handle Sequelize specific errors
  if (/^Sequelize/.test(err.name)) {
    console.log('🚀🚀🚀 It\'s a Sequelize Error');

    // Database Validation Errors
    if (err.errors) {
      const sendErr = err.errors.map(error => ({
        field: error.path,
        message: error.message
      }));
      return res.status(400).json({ status: '0', message: 'Validation error', data: {}, error: sendErr });
    }

    // Other Sequelize Errors
    if (err.original) {
      return res.status(400).json({
        status: '0',
        message: 'Sequelize error',
        data: {},
        error: process.env.NODE_ENV === 'development' ? JSON.stringify(err, null, 2) : 'Something went wrong'
      });
    }
  }

  // Generic error response
  return res.status(err.statusCode || 500).json({
    status: '0',
    message: err.message || 'An error occurred',
    data: {},
    error: err.body ? err.body : ''
  });
};