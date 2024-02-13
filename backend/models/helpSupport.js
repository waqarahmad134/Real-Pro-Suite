module.exports = (sequelize, DataTypes) => {
    const helpSupport = sequelize.define('helpSupport', {
        email: {
            type: DataTypes.STRING(),
            allowNull: false,
            defaultValue: '',
            unique: {
              name: 'Email',
              msg: 'Email address is already in use'
            },
            validate: {
              notEmpty: {
                msg: 'Email cannot be empty'
              },
              isEmail: {
                msg: 'Invalid email format'
              }
            }
          },
          countryCode: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Country Code is Required'
              },
              notEmpty: {
                msg: 'Country Code cannot be empty'
              }
            }
          },
          phoneNum: {
            type: DataTypes.STRING(72),
            allowNull: false,
            defaultValue: '',
            unique: {
              name: 'PhoneNumber',
              msg: 'Phone number is already in use'
            },
            validate: {
              notEmpty: {
                msg: 'Phone Number cannot be empty'
              }
            }
          },
          address: {
            type: DataTypes.STRING(),
            allowNull: true,
          },
    });
    return helpSupport;
};
