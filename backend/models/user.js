const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) => {
  const user = sequelize.define("user", {
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First Name is Required",
        },
        notEmpty: {
          msg: "First Name cannot be empty",
        },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First Name is Required",
        },
        notEmpty: {
          msg: "First Name cannot be empty",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Last Name is Required",
        },
        notEmpty: {
          msg: "Last Name cannot be empty",
        },
      },
    },
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
    ISPemail: {
      type: DataTypes.STRING(),
      allowNull: false,
      defaultValue: '',
      unique: {
        name: 'Email',
        msg: 'Email address is already in use'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    stripeCustomerId: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    dvToken: {
      type: DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    image: {
      type: DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    signedFrom: {
      type: DataTypes.STRING(),
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    uniqueKeys: {
      Email: {
        fields: ['email']
      }
    }
  },
  );

  user.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 12);
  });

  user.associate = (models) => {
    // LINK to OTP Table
    user.hasOne(models.otpVerification);
    models.otpVerification.belongsTo(user);
  };
  // hook to convert created at time stamp
  user.addHook("beforeFind", (options) => {
    if (options.attributes) {
      options.attributes.exclude = ["deletedAt", "updatedAt"];
    }
  });

  return user;
};
