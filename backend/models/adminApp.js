module.exports = (sequelize, DataTypes) => {
    const adminApp = sequelize.define('adminApp', {
        // Add other relevant fields as needed
    }
    );

    adminApp.associate = (models) => {
        models.app.hasMany(adminApp);
        adminApp.belongsTo(models.app)
        // Add additional associations as needed
    };

    return adminApp;
};
