// socialLink.js
module.exports = (sequelize, DataTypes) => {
  const socialLink = sequelize.define('socialLink', {
    platform: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(),
      allowNull: false
    }
  });

  socialLink.associate = models => {

  };

  return socialLink;
};
