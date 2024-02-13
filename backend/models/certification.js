
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Certification = sequelize.define('Certification', {
    certificationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Define the association within the associate method
  Certification.associate = (models) => {
    // Each Certification instance belongs to a user
    Certification.belongsTo(models.user);
  };

  return Certification;
};
