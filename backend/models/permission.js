module.exports = (sequelize, DataTypes) =>{
    const permission = sequelize.define('permission', {
        title: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        value: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    });
    permission.associate = (models)=>{
        permission.hasMany(models.rolePermission);
        models.rolePermission.belongsTo(permission);
    };
    return permission;
};