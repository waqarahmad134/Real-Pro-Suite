require('dotenv').config();
let FCM = require('fcm-node');
let fcm = new FCM(process.env.FIREBASE_SERVER_KEY);

module.exports = async function sendNotification(to, notification, data) {
    let message = {
        registration_ids: to, 
        notification,
        data
    };   
    fcm.send(message,function (err, response) {
        if (err) {
            console.log(`${err}`)
            //res.json(err);
        } else {
            console.log("Successfully sent with response: ", response);
            //res.json(response);
        }
    });
}