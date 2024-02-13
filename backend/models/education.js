module.exports = (sequelize, DataTypes) => {
    const education = sequelize.define('education', {
        degree: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        institution: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        startedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        completedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    education.associate = (models) => {
        models.user.hasMany(education);
        education.belongsTo(models.user);
        // Add additional associations as needed
    };

    return education;
};
