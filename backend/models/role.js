module.exports = (sequelize, DataTypes) =>{
    const role = sequelize.define('role', {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    role.associate = (models)=>{
        role.hasMany(models.user);
        models.user.belongsTo(role);

        role.hasMany(models.rolePermission);
        models.rolePermission.belongsTo(role);
        
    };
    
    return role;
};