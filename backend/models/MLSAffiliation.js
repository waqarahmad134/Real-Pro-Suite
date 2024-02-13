module.exports = (sequelize, DataTypes) => {
    const MLSAffiliation = sequelize.define('MLSAffiliation', {
        mlsProvider: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        membershipStatus: {
            type: DataTypes.ENUM('Active', 'Inactive', 'Pending'),
            allowNull: true,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // Add other relevant fields as needed
    });

    MLSAffiliation.associate = (models) => {
        models.user.hasMany(MLSAffiliation);
        MLSAffiliation.belongsTo(models.user);
        // Add additional associations as needed
    };

    return MLSAffiliation;
};
