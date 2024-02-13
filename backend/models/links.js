module.exports = (sequelize, DataTypes) => {
    const link = sequelize.define('link', {
        linkType: {
            type: DataTypes.ENUM('website', 'social_media'),
            allowNull: false,
        },
        linkValue: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });

    link.associate = (models) => {
        models.user.hasMany(link);
        link.belongsTo(models.user);
    };

    return link;
};
