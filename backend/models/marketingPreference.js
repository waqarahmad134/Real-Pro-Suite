module.exports = (sequelize, DataTypes) => {
  const marketingPreferences = sequelize.define("marketingPreferences", {

    materialsInterest: {
      type: DataTypes.STRING, // You can adjust the data type based on your requirements
      allowNull: false,
    },
    preferredMethods: {
      type: DataTypes.STRING, // You can adjust the data type based on your requirements
      allowNull: false,
    },
    preferredChannels: {
      type: DataTypes.STRING, // You can adjust the data type based on your requirements
      allowNull: false,
    },
  });

  marketingPreferences.associate = (models) => {
    models.user.hasOne(marketingPreferences);
    marketingPreferences.belongsTo(models.user);
  };

  return marketingPreferences;
};
