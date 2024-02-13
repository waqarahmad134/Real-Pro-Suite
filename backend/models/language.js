module.exports = (sequelize, DataTypes) => {
    const language = sequelize.define('language', {
        languageName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        proficiency: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        // Add other relevant fields as needed
    });

    language.associate = (models) => {
        models.user.hasMany(language);
        language.belongsTo(models.user);
        // Add additional associations as needed
    };

    return language;
};
