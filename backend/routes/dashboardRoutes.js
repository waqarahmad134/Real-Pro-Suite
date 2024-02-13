const express = require('express');
const router = express();
const dashboradController = require('../controllers/dashboradController');
const asyncMiddleware = require('../middlewares/catchAync');
const multer = require('multer');
const path = require('path');
const validateToken = require('../middlewares/accessCheck'); 

// ! Module 1: Agent Dashboard
// 1.  Get Admin Apps
router.get('/suiteTools', asyncMiddleware(dashboradController.suiteTools));
// 1.  Get All Apps
router.get('/allApps', asyncMiddleware(dashboradController.allApps));
//2. Add Admin App
router.post('/addSuiteTools',validateToken, asyncMiddleware(dashboradController.addSuiteTools));
//2. Add User Top App
router.post('/addTopApp',validateToken, asyncMiddleware(dashboradController.addtopApp));
// get All Top Apps of User
router.get('/getTopApps',validateToken, asyncMiddleware(dashboradController.topApp));


// ! Module 2: App Hub
// Multer Upload files
const uploadimage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/logo`)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-'+ Math.floor(Math.random() * 1000000000) + '-' +  path.extname(file.originalname))
    }
})

const upload = multer({
    storage: uploadimage,
});
//2. Add App
router.post('/addApp',validateToken,upload.single('logo'), asyncMiddleware(dashboradController.addApp));
//2. Update App
router.post('/updateApp',validateToken,upload.single('logo'), asyncMiddleware(dashboradController.updateApp));

// ! Module 5: Offices
// All Offices
router.get('/allOffices',validateToken,dashboradController.allOffices);

// ! Module 6: Agents
// Add Agent
router.post('/addAgent',validateToken,dashboradController.addAgent);
// All Agents

router.get('/allAgents',validateToken,dashboradController.allAgents);
module.exports = router;