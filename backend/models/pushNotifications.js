module.exports = (sequelize, DataTypes) => {
    const pushNotification = sequelize.define('pushNotification', {
      at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      to: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return pushNotification;
  };
  