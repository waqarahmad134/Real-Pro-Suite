module.exports = (sequelize, DataTypes) => {
    const hobby = sequelize.define('hobby', {
        hobbyType: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // Add other relevant fields as needed
    });

    hobby.associate = (models) => {
        models.user.hasMany(hobby);
        hobby.belongsTo(models.user);
        // Add additional associations as needed
    };

    return hobby;
};
