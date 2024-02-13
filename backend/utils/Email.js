const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user) {
    console.log(user.email)
    this.to = user.email;
    this.firstName = `${user.firstName}${user.lastName}`;
    this.from = `<${process.env.EMAIL_userNAME}>`;
  }

 transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_userNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

  // Send the actual email with raw HTML and attachments
  async send(html, subject, attachments = []) {
    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
      attachments,
    };

    // 3) Create a transport and send email
     this.transporter.sendMail(mailOptions);
  }

};
