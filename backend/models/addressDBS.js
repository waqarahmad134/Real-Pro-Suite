module.exports = (sequelize, DataTypes) => {
    const addressDBS = sequelize.define('addressDBS', {
      title: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      streetAddress: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      building: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      floor: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      apartment: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      district: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      city: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      province: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      country: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      postalCode: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      lat: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      lng: {
        type: DataTypes.STRING(),
        allowNull: true,
        defaultValue: '',
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      type: {
        type: DataTypes.STRING(1024),
        allowNull: true,
        defaultValue: '',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    });
  
    // Associations
    addressDBS.associate = (models) => {
    };
  
    return addressDBS;
  };
  