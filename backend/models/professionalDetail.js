// professionalDetails.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const professionalDetail = sequelize.define('professionalDetail', {
    biography: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  // Define the association within the associate method
  professionalDetail.associate = (models) => {
    // Each ProfessionalDetails instance belongs to a user
    professionalDetail.belongsTo(models.user);
     // Each ProfessionalDetails instance can have multiple Certifications
     professionalDetail.hasMany(models.Certification);
     models.Certification.belongsTo(professionalDetail)
  
      // Each ProfessionalDetails instance can have multiple Awards
      professionalDetail.hasMany(models.Award);
      models.Award.belongsTo(professionalDetail)
  };

  return professionalDetail;
};
