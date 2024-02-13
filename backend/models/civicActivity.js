module.exports = (sequelize, DataTypes) => {
    const civicActivity = sequelize.define('civicActivity', {
        activityType: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        organization: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // Add other relevant fields as needed
    });

    civicActivity.associate = (models) => {
        models.user.hasMany(civicActivity);
        civicActivity.belongsTo(models.user);
        // Add additional associations as needed
    };

    return civicActivity;
};
