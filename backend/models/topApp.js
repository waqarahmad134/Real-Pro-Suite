module.exports = (sequelize, DataTypes) => {
  const topApp = sequelize.define("topApp", {
    // Add other relevant fields as needed
  });

  topApp.associate = (models) => {
    models.user.hasMany(topApp);
    topApp.belongsTo(models.user);

    models.app.hasMany(topApp);
    topApp.belongsTo(models.app);
    // Add additional associations as needed
  };

  return topApp;
};
