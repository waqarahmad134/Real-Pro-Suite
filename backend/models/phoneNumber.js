const { Op } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const phoneNumber = sequelize.define(
    "phoneNumber",
    {
      countryCode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Country Code is Required",
          },
          notEmpty: {
            msg: "Country Code cannot be empty",
          },
        },
      },
      phoneNum: {
        type: DataTypes.STRING(72),
        allowNull: false,
        defaultValue: "",
        unique: {
          name: "PhoneNumber",
          msg: "Phone number is already in use",
        },
        validate: {
          notEmpty: {
            msg: "Phone Number cannot be empty",
          },
        },
      },
      type:{
        type: DataTypes.STRING(72),
        allowNull: false,
        defaultValue: "",
      }
    },
    {
      uniqueKeys: {
        PhoneNumber: {
          fields: ["countryCode", "phoneNum"],
          where: {
            [Op.or]: [
              { countryCode: { [Op.not]: null } },
              { countryCode: { [Op.not]: "" } },
              { phoneNum: { [Op.not]: null } },
            ],
          },
          msg: "Phone number with country code is already in use",
        },
      },
    },
    {
        primaryKey: true,
        autoIncrement: true,
        paranoid: true,
        timestamps: true
      }
  );

  phoneNumber.associate = (models) => {
    models.user.hasMany(phoneNumber);
    phoneNumber.belongsTo(models.user);
  };

  return phoneNumber;
};
