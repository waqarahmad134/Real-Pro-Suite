module.exports = (sequelize, DataTypes) => {
    const office = sequelize.define('office', {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        }
    });

    office.associate = (models) => {
        office.hasMany(models.user);
        models.user.belongsTo(office);

        office.hasMany(models.addressDBS);
        models.addressDBS.belongsTo(office);
        // Add additional associations as needed
    };

    return office;
};
