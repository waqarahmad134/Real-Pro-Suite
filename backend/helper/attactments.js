
function attachment () {
      
 const attachment= {
    logo: {
        filename: 'pps-logo.png',
        path:`${__dirname}/emails/pps-logo.png`,
        cid: 'logoImage' 
    },
    calender: {
        filename: 'calender.png',
        path:__dirname+'/emails/calender.png',
        cid: 'calender' 
    },
    dispatch:{
        filename: 'dispatch.png',
        path:__dirname+'/emails/dispatch.png',
        cid: 'dispatch' 
    },
    instagram:{
        filename: 'instagram2x.png',
        path:__dirname+'/emails/instagram2x.png',
        cid: 'instagram' 
    },
    facebook:{
        filename: 'facebook2x.png',
        path:__dirname+'/emails/facebook2x.png',
        cid: 'facebook' 
    },
    linkedin: {
        filename: 'linkedin2x.png',
        path:__dirname+'/emails/linkedin2x.png',
        cid: 'linkedin' 
    },
    orderComplete: {
        filename: 'order-complete.png',
        path:__dirname+'/emails/order-complete.png',
        cid: 'orderComplete' 
    },
    securityImage: {
        filename: 'security-image.png',
        path:__dirname+'/emails/security-image.png',
        cid: 'securityImage' 
    },
    tick: {
        filename: 'tick.png',
        path:__dirname+'/emails/tick.png',
        cid: 'tick' 
    },
    twitter: {
        filename: 'twitter2x.png',
        path:__dirname+'/emails/twitter2x.png',
        cid: 'twitter' 
    },
    profile: {
        filename: 'user.png',
        path:__dirname+'/emails/user.png',
        cid: 'profile' 
    },
    delivery: {
        filename: 'delivery.png',
        path:__dirname+'/emails/delivery.png',
        cid: 'delivery' 
    },
    drop: {
        filename: 'drop.png',
        path:__dirname+'/emails/drop.png',
        cid: 'drop' 
    },
    recipient: {
        filename: 'recipient.png',
        path:__dirname+'/emails/recipient.png',
        cid: 'recipient' 
    },
}

    return {
        otp : [attachment.logo,attachment.securityImage,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        readyForDeliver : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        pickupDelivery : [attachment.logo,attachment.calender,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        orderPlaced : [attachment.logo,attachment.tick,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        orderCompleted : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        dispatch : [attachment.logo,attachment.dispatch,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        accountCreated : [attachment.logo,attachment.profile,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        scheduleDelivery : [attachment.logo,attachment.calender,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        receivedAtWarehouse : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        orderPlaced : [attachment.logo,attachment.tick,attachment.delivery,attachment.drop,attachment.recipient,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // in-case we have other emails
        attachment,
    }
}
module.exports={attachment};