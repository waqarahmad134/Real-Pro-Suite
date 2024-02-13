function attachments (orderId) {

 let attachment= {
    account_created: {
        filename: 'account_created.png',
        path:`${__dirname}/images/account_created.png`,
        cid: 'account_created'
    },
    intransit: {
        filename: 'intransit.png',
        path:__dirname+'/images/intransit.png',
        cid: 'intransit'
    },
    order_arrived:{
        filename: 'order_arrived.png',
        path:__dirname+'/images/order_arrived.png',
        cid: 'order_arrived'
    },
    instagram:{
        filename: 'instagram2x.png',
        path:__dirname+'/images/instagram2x.png',
        cid: 'instagram'
    },
    facebook:{
        filename: 'facebook2x.png',
        path:__dirname+'/images/facebook2x.png',
        cid: 'facebook'
    },
    linkedin: {
        filename: 'linkedin2x.png',
        path:__dirname+'/images/linkedin2x.png',
        cid: 'linkedin'
    },
    order_delivered: {
        filename: 'order_delivered.png',
        path:__dirname+'/images/order_delivered.png',
        cid: 'order_delivered'
    },
    logo: {
        filename: 'pacifrica_logo.png',
        path:__dirname+'/images/pacifrica_logo.png',
        cid: 'pacifrica_logo'
    },
    security: {
        filename: 'security.png',
        path:__dirname+'/images/security.png',
        cid: 'security'
    },
    twitter: {
        filename: 'twitter2x.png',
        path:__dirname+'/images/twitter2x.png',
        cid: 'twitter'
    },
    security_image: {
        filename: 'security-image.png',
        path:__dirname+'/images/security-image.png',
        cid: 'security-image'
    },
    tick: {
        filename: 'tick.png',
        path:__dirname+'/images/tick.png',
        cid: 'tick'
    },
    warehouse: {
        filename: 'warehouse.png',
        path:__dirname+'/images/warehouse.png',
        cid: 'warehouse'
    },
    payment:{
        filename:'payment.png',
        path:__dirname+'/images/payment.png',
        cid: 'payment'
    },
    invoice: {
        filename: `Order-${orderId}.pdf`, // Name of the attached file
        path:`public/invoice/Order-${orderId}.pdf`, 
            
    },
    wayBills: {
        filename: `WayBill-${orderId}.pdf`, // Name of the attached file
        path:`public/wayBills/WayBill-${orderId}.pdf`, 
            
    },
    dispatch: {
        filename: `dispatch.png`, // Name of the attached file
        path:__dirname+'/images/dispatch.png',
        cid: 'dispatch' 
    },

}
    return {
        otp : [attachment.logo,attachment.security,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        resetPassword : [attachment.logo,attachment.security,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        account_created : [attachment.logo,attachment.account_created,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        arrived : [attachment.logo,attachment.warehouse,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        arrivedAtLocalHub : [attachment.logo,attachment.order_arrived,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        inTransit : [attachment.logo,attachment.intransit,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        inVoice : [attachment.logo,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin,attachment.invoice],        // readyForDeliver : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        orderDelivery : [attachment.logo,attachment.order_delivered,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],        // readyForDeliver : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        orderCreated : [attachment.logo,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin,attachment.wayBills],        // readyForDeliver : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        payment : [attachment.logo,attachment.payment,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],        // readyForDeliver : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        dispatch : [attachment.logo,attachment.dispatch,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        
        // pickupDelivery : [attachment.logo,attachment.calender,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // orderPlaced : [attachment.logo,attachment.tick,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // orderCompleted : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // accountCreated : [attachment.logo,attachment.profile,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // scheduleDelivery : [attachment.logo,attachment.calender,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // receivedAtWarehouse : [attachment.logo,attachment.orderComplete,attachment.facebook,attachment.twitter,attachment.instagram,attachment.linkedin],
        // in-case we have other emails
        // attachment,
    }
}
module.exports={attachments};