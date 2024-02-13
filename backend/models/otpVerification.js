module.exports = (sequelize, DataTypes) => {
    const otpVerification = sequelize.define('otpVerification', {
      OTP: {
        type: DataTypes.STRING(5),
        allowNull: true,
        validate: {
          len: {
            args: [4, 4],
            msg: 'OTP must be exactly 5 characters long',
          },
        },
      },
      reqAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      expiryAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      verifiedInForgetCase: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    });
  
    return otpVerification;
  };
  