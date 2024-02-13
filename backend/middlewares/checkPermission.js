require('dotenv').config();
const {
    warehouse, permission
} = require('../models');
module.exports = async function validateToken(req,res, next){
    try {
        let userData = await user.findByPk(req.user.id, {
            attributes: [ 'roleId']
        });
        let method = req.method.toLowerCase();
        method = method === 'get'? 'read': method === 'post'? 'create': method === 'put'? 'update': method;   
        if(userData.roleId === 1) next()
        else{
            const permissionData = await permission.findAll({where: {featureId: req.query.featureId, roleId: userData.roleId}, attributes: ['permissionType']})
            let hasAcsess = permissionData.some(ele=> ele.permissionType === method);
            if(!hasAcsess) throw Error();
            next();
        }
    } catch (error) {
        return res.json({
            status: '2',
            message: 'Access Denied',
            data: {},
            error: 'You are not authorized to access it',
        })  
    }
}

//redis_Client.del(key);