// award.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Award = sequelize.define('Award', {
    awardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define the association within the associate method
  Award.associate = (models) => {
    // Each Award instance belongs to a user
    Award.belongsTo(models.user);
  };

  return Award;
};
