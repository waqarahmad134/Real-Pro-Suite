module.exports = (sequelize, DataTypes) => {
    const app = sequelize.define('app', {
        appName: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        appDescription: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        appUrl: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        logo: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    });

    app.associate = models => {

    };
    return app;
};
