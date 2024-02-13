module.exports = (sequelize, DataTypes) =>{
    const rolePermission = sequelize.define('rolePermission', { 
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    });
    rolePermission.associate = (models)=>{
    };
    return rolePermission;

};