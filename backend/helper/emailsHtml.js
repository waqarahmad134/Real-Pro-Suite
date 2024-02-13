function registeruserEmail(data) {
  let newuser = `
  <table
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  style="table-layout: fixed; background-color: #f9f9f9"
  id="bodyTable"
  >
  <tbody>
  <tr>
      <td
      style="padding-right: 10px; padding-left: 10px"
      align="center"
      valign="top"
      id="bodyCell"
      >
      <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          class="wrapperBody"
          style="max-width: 600px"
      >
          <tbody>
          <tr>
              <td align="center" valign="top">
              <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  class="tableCard"
                  style="
                  background-color: #fff;
                  border-color: #e5e5e5;
                  border-style: solid;
                  border-width: 0 1px 1px 1px;
                  "
              >
                  <tbody>
                  <tr>
                      <td
                      style="
                          background-color: #00d2f4;
                          font-size: 1px;
                          line-height: 3px;
                      "
                      class="topBorder"
                      height="3"
                      align="center"
                      valign="middle"
                      >
                      &nbsp;
                      </td>
                  </tr>
                  <tr>
                      <td
                      style="padding-top: 60px; padding-bottom: 20px; font-size: 20px; color: black; font-weight: 600"
                      align="center"
                      valign="middle"
                      class="emailLogo"
                      >   
                          <img 
                              src="cid:logoImage" 
                              width="100" 
                          />
                          <br />
                          <br />
                          
                      </td>
                  </tr>
                  <tr>
                      <td
                      style="
                          padding-bottom: 5px;
                          padding-left: 20px;
                          padding-right: 20px;
                      "
                      align="center"
                      valign="top"
                      class="mainTitle"
                      >
                      <h2
                          class="text"
                          style="
                          color: #000;
                          font-family: Poppins, Helvetica, Arial, sans-serif;
                          font-size: 20px;
                          font-weight: 500;
                          font-style: normal;
                          letter-spacing: normal;
                          line-height: 36px;
                          text-transform: none;
                          text-align: center;
                          padding: 0;
                          margin: 0;
                          "
                      >
                          
                      </h2>
                      </td>
                  </tr>
                  <tr>
                      <td
                      style="padding-left: 20px; padding-right: 20px"
                      align="center"
                      valign="top"
                      class="containtTable ui-sortable"
                      >
                      <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          class="tableDescription"
                      >
                          <tbody>
                          <tr>
                              <td
                              style="padding-bottom: 20px"
                              align="center"
                              valign="top"
                              class="description"
                              >
                              <p
                                  class="text"
                                  style="
                                  color: #666;
                                  font-family: 'Open Sans', Helvetica, Arial,
                                      sans-serif;
                                  font-size: 14px;
                                  font-weight: 400;
                                  font-style: normal;
                                  letter-spacing: normal;
                                  line-height: 22px;
                                  text-transform: none;
                                  text-align: center;
                                  padding: 0;
                                  margin: 0;
                                  "
                              >
                              Thank you for registering with us. Please verify your email address to complete your  registration. Your One Time Password (OTP) is
                              </p>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                      <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          class="tableButton"
                      >
                          <tbody>
                          <tr>
                              <td
                              style="padding-top: 20px; padding-bottom: 20px"
                              align="center"
                              valign="top"
                              >
                              <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  align="center"
                              >
                                  <tbody>
                                  <tr>
                                      <td
                                      style="
                                          background-color: #222222;
                                          color: #ebfd6c;
                                          border: 2px solid #222222;
                                          padding: 12px 32px;
                                          border-radius: 32px;
                                      "
                                      align="center"
                                      class="ctaButton"
                                      >
                                      <span
                                          style="
                                          text-decoration: none;
                                          display: block;
                                          "
                                          >${data.OTP}</span
                                      >
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                              <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  class="tableDescription"
                              >
                                  <tbody>
                                  <tr>
                                      <td
                                      style="padding: 20px 0"
                                      align="center"
                                      valign="top"
                                      class="description"
                                      >
                                      <p
                                          class="text"
                                          style="
                                          color: #666;
                                          font-family: 'Open Sans', Helvetica,
                                              Arial, sans-serif;
                                          font-size: 14px;
                                          font-weight: 400;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 22px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                          "
                                      >
                                      In order to protect your account from misuse / fraudulent activity, it is requested to please never share the OTP with anyone.
                                      Note: Please do not reply to this email as this is the system generated email. For further queries, contact us at support@theshippinghack.com
                                      </p>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                      </td>
                  </tr>
                  <tr>
                      <td style="font-size: 1px; line-height: 1px" height="20">
                      &nbsp;
                      </td>
                  </tr>
                  </tbody>
              </table>
              <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  class="space"
              >
                  <tbody>
                  <tr>
                      <td style="font-size: 1px; line-height: 1px" height="30">
                      &nbsp;
                      </td>
                  </tr>
                  </tbody>
              </table>
              </td>
          </tr>
          </tbody>
      </table>
      </td>
  </tr>
  </tbody>
</table>
`
return newuser;
};

function forgetuserEmail(data) {
  let newuser = `
  <table
  border="0"
  cellpadding="0"
  cellspacing="0"
  width="100%"
  style="table-layout: fixed; background-color: #f9f9f9"
  id="bodyTable"
  >
  <tbody>
  <tr>
      <td
      style="padding-right: 10px; padding-left: 10px"
      align="center"
      valign="top"
      id="bodyCell"
      >
      <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          class="wrapperBody"
          style="max-width: 600px"
      >
          <tbody>
          <tr>
              <td align="center" valign="top">
              <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  class="tableCard"
                  style="
                  background-color: #fff;
                  border-color: #e5e5e5;
                  border-style: solid;
                  border-width: 0 1px 1px 1px;
                  "
              >
                  <tbody>
                  <tr>
                      <td
                      style="
                          background-color: #00d2f4;
                          font-size: 1px;
                          line-height: 3px;
                      "
                      class="topBorder"
                      height="3"
                      align="center"
                      valign="middle"
                      >
                      &nbsp;
                      </td>
                  </tr>
                  <tr>
                      <td
                      style="padding-top: 60px; padding-bottom: 20px; font-size: 20px; color: black; font-weight: 600"
                      align="center"
                      valign="middle"
                      class="emailLogo"
                      >   
                          <img 
                              src="cid:logoImage" 
                              width="100" 
                          />
                          <br />
                          <br />
                          
                      </td>
                  </tr>
                  <tr>
                      <td
                      style="
                          padding-bottom: 5px;
                          padding-left: 20px;
                          padding-right: 20px;
                      "
                      align="center"
                      valign="top"
                      class="mainTitle"
                      >
                      <h2
                          class="text"
                          style="
                          color: #000;
                          font-family: Poppins, Helvetica, Arial, sans-serif;
                          font-size: 20px;
                          font-weight: 500;
                          font-style: normal;
                          letter-spacing: normal;
                          line-height: 36px;
                          text-transform: none;
                          text-align: center;
                          padding: 0;
                          margin: 0;
                          "
                      >
                         
                      </h2>
                      </td>
                  </tr>
                  <tr>
                      <td
                      style="padding-left: 20px; padding-right: 20px"
                      align="center"
                      valign="top"
                      class="containtTable ui-sortable"
                      >
                      <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          class="tableDescription"
                      >
                          <tbody>
                          <tr>
                              <td
                              style="padding-bottom: 20px"
                              align="center"
                              valign="top"
                              class="description"
                              >
                              <p
                                  class="text"
                                  style="
                                  color: #666;
                                  font-family: 'Open Sans', Helvetica, Arial,
                                      sans-serif;
                                  font-size: 14px;
                                  font-weight: 400;
                                  font-style: normal;
                                  letter-spacing: normal;
                                  line-height: 22px;
                                  text-transform: none;
                                  text-align: center;
                                  padding: 0;
                                  margin: 0;
                                  "
                              >
                              We received a request to change your password. Please verify your OTP to reset your password. Your One Time Password(OTP) is
                              </p>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                      <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          class="tableButton"
                      >
                          <tbody>
                          <tr>
                              <td
                              style="padding-top: 20px; padding-bottom: 20px"
                              align="center"
                              valign="top"
                              >
                              <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  align="center"
                              >
                                  <tbody>
                                  <tr>
                                      <td
                                      style="
                                          background-color: #222222;
                                          color: #ebfd6c;
                                          border: 2px solid #222222;
                                          padding: 12px 32px;
                                          border-radius: 32px;
                                      "
                                      align="center"
                                      class="ctaButton"
                                      >
                                      <span
                                          style="
                                          text-decoration: none;
                                          display: block;
                                          "
                                          >${data.OTP}</span
                                      >
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                              <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  class="tableDescription"
                              >
                                  <tbody>
                                  <tr>
                                      <td
                                      style="padding: 20px 0"
                                      align="center"
                                      valign="top"
                                      class="description"
                                      >
                                      <p
                                          class="text"
                                          style="
                                          color: #666;
                                          font-family: 'Open Sans', Helvetica,
                                              Arial, sans-serif;
                                          font-size: 14px;
                                          font-weight: 400;
                                          font-style: normal;
                                          letter-spacing: normal;
                                          line-height: 22px;
                                          text-transform: none;
                                          text-align: center;
                                          padding: 0;
                                          margin: 0;
                                          "
                                      >
                                      In order to protect your account from misuse / fraudulent activity, it is requested to please never share the OTP with anyone.
                                      Note: Please do not reply to this email as this is the system generated email. For further queries, contact us at support@theshippinghack.com
                                      </p>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                              </td>
                          </tr>
                          </tbody>
                      </table>
                      </td>
                  </tr>
                  <tr>
                      <td style="font-size: 1px; line-height: 1px" height="20">
                      &nbsp;
                      </td>
                  </tr>
                  </tbody>
              </table>
              <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  class="space"
              >
                  <tbody>
                  <tr>
                      <td style="font-size: 1px; line-height: 1px" height="30">
                      &nbsp;
                      </td>
                  </tr>
                  </tbody>
              </table>
              </td>
          </tr>
          </tbody>
      </table>
      </td>
  </tr>
  </tbody>
</table>
`
return newuser;
};

function createBooking(userName, parcelDetails){
  let data = 
  `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          .image_block img+div {
              display: none;
          }
  
          @media (max-width:700px) {
              .desktop_hide table.icons-inner {
                  display: inline-block !important;
              }
  
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .image_block img.big,
              .row-content {
                  width: 100% !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  <body style="background-color: #f8f8f8; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f8;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; " width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: white; color: #000000; border-radius: 0; width: 680px;" width="680">
  <tbody>
  <tr>
  
  <td class="column " style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="75%">
  <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="display:flex; justify-content: center; align-items: center;">
  <img src="cid:logoImage" style="display: block; height: auto; border: 0; width: 70px; margin:auto"/>
  <div style="color:#000000;font-size:16px;font-family:Nunito, Arial, Helvetica Neue, Helvetica, sans-serif;font-weight:400;line-height:120%;text-align:center;direction:ltr;letter-spacing:0px;mso-line-height-alt:19.2px;">
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>

  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: white; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" >
  <div style="font-family: sans-serif; ">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #787771; line-height: 1.7;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px; padding-left:35px;"><span style="font-size:16px; color:black;"><strong>Hi <span style="color:rgba(34, 34, 34, 0.6)">${userName} </span></strong></span></p>
  
  </div>
  </div>
  </td>
  </tr>
  </table>



  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: white; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #787771; line-height: 1.7;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="font-size:16px; color: rgba(34, 34, 34, 0.6);"> Thank you for placing order at  Logistica
  <br>Your order has placed successfully. Soon our driver will come to pick up from you</span></p>
  
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>

  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: white; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-left:35px">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #787771; line-height: 1.7;   ">
  <p style="margin: 0; font-size: 20px; mso-line-height-alt: 16.8px; font-weight:700; color:black">Parcel Details</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>

  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background: white; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:#000000;"><strong>Type of shipment</strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left;  padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 16.8px;"><span style="color:rgba(34, 34, 34, 0.6);"><span style="font-size:16px;">${parcelDetails.shipmentType}</span><span style="font-size:16px;"> </span></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; " width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background: white; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:#000000;"><strong>Category</strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:rgba(34, 34, 34, 0.6);">${parcelDetails.category}</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background: white; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="color:#000000;"><strong><span style="font-size:16px;">Size</span></strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:rgba(34, 34, 34, 0.6);">${parcelDetails.sizeType}</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background: white; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><strong><span style="font-size:16px;color:#000000;">Booking Type</span></strong></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:rgba(34, 34, 34, 0.6);">${parcelDetails.bookingType}</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background: white; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:#000000;"><strong>Estd. Delivery</strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad"  style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 16.8px;"><span style="color:rgba(34, 34, 34, 0.6);"><span style="font-size:16px;">${parcelDetails.ETA}</span></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background: white; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;color:#000000;"><strong>Total</strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-left:20px; padding-right:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #c4a07a; line-height: 1.2;">
  <p style="margin: 0; font-size: 14px; text-align: right; mso-line-height-alt: 16.8px;"><span style="color:rgba(34, 34, 34, 0.6);"><span style="font-size:16px;">${parcelDetails.total}</span></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:15px;padding-left:35px;padding-right:35px;padding-top:15px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; font-family: Nunito, Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #44464a; line-height: 1.8;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28.8px;"><span style="font-size:16px;color:rgba(34, 34, 34, 0.6);">If you have received this message by mistake, ignore this email. If you think someone else is using your account without your consent, please <strong><span style="color:#001dff;">contact us at TheShippingHack507@TSH.com</span>.</strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>`
return data;
};


function timeStampConverter(input){
const timeStamp = new Date(`${input}`);

const day = String(timeStamp.getDate()).padStart(2, '0');
const month = String(timeStamp.getMonth() + 1).padStart(2, '0');
const year = timeStamp.getFullYear();

const hours = String(timeStamp.getHours()).padStart(2, '0');
const minutes = String(timeStamp.getMinutes()).padStart(2, '0');
const seconds = String(timeStamp.getSeconds()).padStart(2, '0');

const formattedDate = `${day}-${month}-${year}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;
return {date: formattedDate , time: formattedTime}
}

function socialMediaLinks() {
let links ={
  facebook : 'https://www.facebook.com/',
  linkedin : 'https://www.linkedin.com/',
  twitter : 'https://www.twitter.com/',
  instagram : 'https://www.instagram.com/',
 }
return links
}
function emailButton(url,buttonName) {
let button = `<table style="margin: auto;">
<tr>
<td style="
display: flex;
justify-content: center !important;

" >
<div
style="
  display: flex;
  justify-content: center !important;
  margin: 20px 0px;
"
>
<a
  style="
    background-color: #202053;
    border: none;
    color: #fff;
    padding: 12px 40px;
    cursor: pointer;
    text-decoration: none;
  "
  href="${url}"
>
  ${buttonName}
</a>
</div>
</td>
</tr>
</table>`
return button
}

function emailOTP(otp,links,cond){
let content =`Thanks for registering with us. Please verify your email address to complete your  registration. Your One Time Password (OTP) is`
let heading = `Account Verification`
if (cond === 'forget'){
  content = `We found a request for forgot password. Its okay! It's happens. Use this OTP to reset your password.`
  heading = `Reset your password`
} 
  let data = `
  <!DOCTYPE html>
  
  <html
    lang="en"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
  
        body {
          margin: 0;
          padding: 0;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
  
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
  
        p {
          line-height: inherit;
        }
  
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
  
        .image_block img + div {
          display: none;
        }
  
        @media (max-width: 520px) {
          .desktop_hide table.icons-inner,
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
  
          .icons-inner {
            text-align: center;
          }
  
          .icons-inner td {
            margin: 0 auto;
          }
  
          .mobile_hide {
            display: none;
          }
  
          .row-content {
            width: 100% !important;
          }
  
          .stack .column {
            width: 100%;
            display: block;
          }
  
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
  
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body
      style="
        background-color: #fff;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      "
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #fff;
        "
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-1"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  background-color: #202053;
                "
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="5"
                                cellspacing="0"
                                class="image_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      align="center"
                                      class="alignment"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="cid:logoImage"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 100px;
                                          width: 100%;
                                        "
                                        width="100"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-2"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 20px;
                                  line-height: 20px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-3"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="image_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      width: 100%;
                                      padding-right: 0px;
                                      padding-left: 0px;
                                    "
                                  >
                                    <div
                                      align="center"
                                      class="alignment"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="cid:securityImage"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 200px;
                                          width: 100%;
                                        "
                                        width="200"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-4"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 10px;
                                  line-height: 10px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-5"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="text-align: center; width: 100%"
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #101010;
                                        direction: ltr;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 24px;
                                        font-weight: 700;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                      "
                                    >
                                    ${heading}
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-2"
                                style="
                                  height: 20px;
                                  line-height: 20px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-6"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #000000;
                                        direction: ltr;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p style="margin: 0">${content}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-2"
                                style="
                                  height: 60px;
                                  line-height: 60px;
                                  font-size: 1px;
                                "
                              >
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                border="0"
                cellpadding="10"
                cellspacing="0"
                class="social_block block-3"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tr>
                  <td class="pad">
                    <div align="center" class="alignment">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="social-table"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          display: inline-block;
                        "
                        width="240px"
                        margin = "auto"
                      >
                        <tr>
                          <td style="padding: 0 2px 0 2px">
                            <div
                              style="
                                background-color: #202053;
                                padding: 16px;
                                color: #fff;
                                border-radius: 8px;
                                font-size: 20px;
                              "
                            >
                              ${otp[0]}
                            </div>
                          </td>
                          <td style="padding: 0 2px 0 2px">
                            <div
                              style="
                                background-color: #202053;
                                padding: 16px;
                                color: #fff;
                                border-radius: 8px;
                                font-size: 20px;
                              "
                            >
                            ${otp[1]}
                            </div>
                          </td>
                          <td style="padding: 0 2px 0 2px">
                            <div
                              style="
                                background-color: #202053;
                                padding: 16px;
                                color: #fff;
                                border-radius: 8px;
                                font-size: 20px;
                              "
                            >
                            ${otp[2]}
                            </div>
                          </td>
                          <td style="padding: 0 2px 0 2px">
                            <div
                              style="
                                background-color: #202053;
                                padding: 16px;
                                color: #fff;
                                border-radius: 8px;
                                font-size: 20px;
                              "
                            >
                            ${otp[3]}
                            </div>
                          </td>
                          <td style="padding: 0 2px 0 2px">
                            <div
                              style="
                                background-color: #202053;
                                padding: 16px;
                                color: #fff;
                                border-radius: 8px;
                                font-size: 20px;
                              "
                            >
                            ${otp[4]}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-8"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 30px;
                                  line-height: 30px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-9"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #1c1c1c;
                                        direction: ltr;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        font-size: 14px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 150%;
                                        text-align: center;
                                        mso-line-height-alt: 21px;
                                      "
                                    >
                                      <p style="margin: 0">
                                      In order to protect your account from misuse / fraudulent activity, it is requested to please never share the OTP with anyone. Note: Please do not reply to this email as this is the system generated email.<br /> For further queries contact
                                        us.
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-2"
                                style="
                                  height: 50px;
                                  line-height: 50px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="social_block block-3"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="social-table"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          display: inline-block;
                                        "
                                        width="144px"
                                      >
                                        <tr>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="${links.facebook}"
                                              target="_blank"
                                              ><img
                                                alt="Facebook"
                                                height="32"
                                                src="cid:facebook"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="Facebook"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="${links.twitter}"
                                              target="_blank"
                                              ><img
                                                alt="Twitter"
                                                height="32"
                                                src="cid:twitter"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="Twitter"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="${links.instagram}"
                                              target="_blank"
                                              ><img
                                                alt="Instagram"
                                                height="32"
                                                src="cid:instagram"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="Instagram"
                                                width="32"
                                            /></a>
                                          </td>
                                          <td style="padding: 0 2px 0 2px">
                                            <a
                                              href="${links.linkedin}"
                                              target="_blank"
                                              ><img
                                                alt="LinkedIn"
                                                height="32"
                                                src="cid:linkedin"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  border: 0;
                                                "
                                                title="LinkedIn"
                                                width="32"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-4"
                                style="
                                  height: 10px;
                                  line-height: 10px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-10"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="text-align: center; width: 100%"
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #000000;
                                        direction: ltr;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        font-weight: 700;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                      "
                                    >
                                      <span class="tinyMce-placeholder"
                                        >Follow Us</span
                                      >
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-2"
                                style="
                                  height: 20px;
                                  line-height: 20px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-11"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #000000;
                                        direction: ltr;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 14px;
                                        font-weight: 700;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Edif. Gate Center, San Francisco, Cl. 67
                                        Panamá
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-12"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-radius: 0;
                          color: #000;
                          width: 500px;
                          margin: 0 auto;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #000000;
                                        direction: ltr;
                                        font-family: 'Helvetica Neue', Helvetica,
                                          Arial, sans-serif;
                                        font-size: 12px;
                                        font-weight: 700;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 14.399999999999999px;
                                      "
                                    >
                                      <p style="margin: 0">
                                        Copyright © 2023  
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `
return data;
} 
function scheduleDelivery(data,links,button,to) {
let name = data.receiverName;
if (to === 'sender') {
  name = data.senderName
}
if(button === ''){
  name = data.senderName
    button = `<table
    border="0"
    cellpadding="10"
    cellspacing="0"
    class="text_block block-5"
    role="presentation"
    style="
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      word-break: break-word;
    "
    width="100%"
  >
    <tr>
      <td class="pad">
        <div style="font-family: sans-serif">
          <div
            class=""
            style="
              font-size: 12px;
              font-family: Arial, 'Helvetica Neue',
                Helvetica, sans-serif;
              mso-line-height-alt: 14.399999999999999px;
              color: #000000;
              line-height: 1.2;
            "
          >
            <p
              style="
                margin: 0;
                font-size: 14px;
                text-align: center;
                mso-line-height-alt: 16.8px;
              "
            >
              <strong>Open the app and schedule the Booking</strong> 
            </p>
          </div>
        </div>
      </td>
    </tr>
  </table>`;
}

const createdAt = timeStampConverter(data.createdAt);
let email = `
   <!DOCTYPE html>
   <html
     lang="en"
     xmlns:o="urn:schemas-microsoft-com:office:office"
     xmlns:v="urn:schemas-microsoft-com:vml"
   >
     <head>
       <title></title>
       <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
       <meta content="width=device-width, initial-scale=1.0" name="viewport" />
       <!--[if mso
         ]><xml
           ><o:OfficeDocumentSettings
             ><o:PixelsPerInch>96</o:PixelsPerInch
             ><o:AllowPNG /></o:OfficeDocumentSettings></xml
       ><![endif]-->
       <style>
         * {
           box-sizing: border-box;
         }
 
         body {
           margin: 0;
           padding: 0;
         }
 
         a[x-apple-data-detectors] {
           color: inherit !important;
           text-decoration: inherit !important;
         }
 
         #MessageViewBody a {
           color: inherit;
           text-decoration: none;
         }
 
         p {
           line-height: inherit;
         }
 
         .desktop_hide,
         .desktop_hide table {
           mso-hide: all;
           display: none;
           max-height: 0px;
           overflow: hidden;
         }
 
         .image_block img + div {
           display: none;
         }
 
         @media (max-width: 520px) {
           .desktop_hide table.icons-inner,
           .social_block.desktop_hide .social-table {
             display: inline-block !important;
           }
 
           .icons-inner {
             text-align: center;
           }
 
           .icons-inner td {
             margin: 0 auto;
           }
 
           .mobile_hide {
             display: none;
           }
 
           .row-content {
             width: 100% !important;
           }
 
           .stack .column {
             width: 100%;
             display: block;
           }
 
           .mobile_hide {
             min-height: 0;
             max-height: 0;
             max-width: 0;
             overflow: hidden;
             font-size: 0px;
           }
 
           .desktop_hide,
           .desktop_hide table {
             display: table !important;
             max-height: none !important;
           }
         }
       </style>
     </head>
     <body
       style="
         background-color: #fff;
         margin: 0;
         padding: 0;
         -webkit-text-size-adjust: none;
         text-size-adjust: none;
       "
     >
       <table
         border="0"
         cellpadding="0"
         cellspacing="0"
         class="nl-container"
         role="presentation"
         style="
           mso-table-lspace: 0pt;
           mso-table-rspace: 0pt;
           background-color: #fff;
         "
         width="100%"
       >
         <tbody>
           <tr>
             <td>
               <table
                 align="center"
                 border="0"
                 cellpadding="0"
                 cellspacing="0"
                 class="row row-1"
                 role="presentation"
                 style="
                   mso-table-lspace: 0pt;
                   mso-table-rspace: 0pt;
                   background-color: #202053;
                 "
                 width="100%"
               >
                 <tbody>
                   <tr>
                     <td>
                       <table
                         align="center"
                         border="0"
                         cellpadding="0"
                         cellspacing="0"
                         class="row-content stack"
                         role="presentation"
                         style="
                           mso-table-lspace: 0pt;
                           mso-table-rspace: 0pt;
                           color: #000;
                           width: 500px;
                           margin: 0 auto;
                         "
                         width="500"
                       >
                         <tbody>
                           <tr>
                             <td
                               class="column column-1"
                               style="
                                 mso-table-lspace: 0pt;
                                 mso-table-rspace: 0pt;
                                 font-weight: 400;
                                 text-align: left;
                                 padding-bottom: 5px;
                                 padding-top: 5px;
                                 vertical-align: top;
                                 border-top: 0px;
                                 border-right: 0px;
                                 border-bottom: 0px;
                                 border-left: 0px;
                               "
                               width="100%"
                             >
                               <table
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 class="image_block block-1"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td
                                     class="pad"
                                     style="
                                       width: 100%;
                                       padding-right: 0px;
                                       padding-left: 0px;
                                     "
                                   >
                                     <div
                                       align="center"
                                       class="alignment"
                                       style="line-height: 10px"
                                     >
                                       <img
                                         src="cid:logoImage"
                                         style="
                                           display: block;
                                           height: auto;
                                           border: 0;
                                           max-width: 100px;
                                           width: 100%;
                                         "
                                         width="125"
                                       />
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </td>
                   </tr>
                 </tbody>
               </table>
               <table
                 align="center"
                 border="0"
                 cellpadding="0"
                 cellspacing="0"
                 class="row row-2"
                 role="presentation"
                 style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                 width="100%"
               >
                 <tbody>
                   <tr>
                     <td>
                       <table
                         align="center"
                         border="0"
                         cellpadding="0"
                         cellspacing="0"
                         class="row-content stack"
                         role="presentation"
                         style="
                           mso-table-lspace: 0pt;
                           mso-table-rspace: 0pt;
                           border-radius: 0;
                           color: #000;
                           width: 500px;
                           margin: 0 auto;
                         "
                         width="500"
                       >
                         <tbody>
                           <tr>
                             <td
                               class="column column-1"
                               style="
                                 mso-table-lspace: 0pt;
                                 mso-table-rspace: 0pt;
                                 font-weight: 400;
                                 text-align: left;
                                 padding-bottom: 5px;
                                 padding-top: 5px;
                                 vertical-align: top;
                                 border-top: 0px;
                                 border-right: 0px;
                                 border-bottom: 0px;
                                 border-left: 0px;
                               "
                               width="100%"
                             >
                               <div
                                 class="spacer_block block-1"
                                 style="
                                   height: 60px;
                                   line-height: 60px;
                                   font-size: 1px;
                                 "
                               >
                                  
                               </div>
                               <table
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 class="image_block block-2"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td
                                     class="pad"
                                     style="
                                       width: 100%;
                                       padding-right: 0px;
                                       padding-left: 0px;
                                     "
                                   >
                                     <div
                                       align="center"
                                       class="alignment"
                                       style="
                                         background-color: #202053;
                                         width: 100px;
                                         height: 100px;
                                         margin: 0 auto;
                                         padding: 24px;
                                         border-radius: 50%;
                                       "
                                     >
                                       <img
                                         src="cid:calender"
                                         style="
                                           display: block;
                                           height: auto;
                                           border: 0;
                                           width: 50px;
                                           height: 50px;
                                         "
                                         width="100"
                                       />
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                               <div
                                 class="spacer_block block-3"
                                 style="
                                   height: 20px;
                                   line-height: 20px;
                                   font-size: 1px;
                                 "
                               >
                                  
                               </div>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="text_block block-4"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                   word-break: break-word;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <div style="font-family: sans-serif">
                                       <div
                                         class=""
                                         style="
                                           font-size: 12px;
                                           font-family: Arial, 'Helvetica Neue',
                                             Helvetica, sans-serif;
                                           mso-line-height-alt: 14.399999999999999px;
                                           color: #000000;
                                           line-height: 1.2;
                                         "
                                       >
                                         <p
                                           style="
                                             margin: 0;
                                             font-size: 16px;
                                             text-align: center;
                                             mso-line-height-alt: 19.2px;
                                           "
                                         >
                                           <span style="font-size: 24px"
                                             ><strong
                                               >Schedule your delivery</strong
                                             ></span
                                           >
                                         </p>
                                       </div>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="text_block block-5"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                   word-break: break-word;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <div style="font-family: sans-serif">
                                       <div
                                         class=""
                                         style="
                                           font-size: 12px;
                                           font-family: Arial, 'Helvetica Neue',
                                             Helvetica, sans-serif;
                                           mso-line-height-alt: 14.399999999999999px;
                                           color: #000000;
                                           line-height: 1.2;
                                         "
                                       >
                                         <p
                                           style="
                                             margin: 0;
                                             font-size: 14px;
                                             text-align: center;
                                             mso-line-height-alt: 16.8px;
                                           "
                                         >
                                           <strong>Hi ${name}:</strong> This is a
                                           reminder that your scheduled delivery
                                           for Order<br />is coming up soon! 
                                         </p>
                                       </div>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                              ${button}
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-7"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #000000;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 20px;
                                         font-weight: 700;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <span class="tinyMce-placeholder"
                                         >Shipment Detail :</span
                                       >
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-14"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #1a1a1a;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <strong>Tracking ID :</strong> ${data.trackingId}
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-12"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #1a1a1a;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <strong>Sender :</strong> ${data.senderName} 
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-13"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #1a1a1a;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <strong>Receiver :</strong> ${data.receiverName}
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-11"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #1a1a1a;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <strong>Booking Date :</strong> ${createdAt.date}
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-9"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #1a1a1a;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <span class="tinyMce-placeholder"
                                         ><strong>Origin</strong>
                                         <strong> : </strong>${data.receivingWarehouse.addressDB.postalCode} ${data.receivingWarehouse.addressDB.secondPostalCode}, ${data.receivingWarehouse.addressDB.corregimiento.title}, ${data.receivingWarehouse.addressDB.district.title}, ${data.receivingWarehouse.addressDB.province.title}</span
                                       >
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-10"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #1a1a1a;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: left;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       <span class="tinyMce-placeholder"
                                         ><strong>Destination : </strong
                                         >${data.deliveryWarehouse.addressDB.postalCode} ${data.deliveryWarehouse.addressDB.secondPostalCode}, ${data.deliveryWarehouse.addressDB.corregimiento.title}, ${data.deliveryWarehouse.addressDB.district.title}, ${data.deliveryWarehouse.addressDB.province.title}</span
                                       >
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               
                               <div
                                 class="spacer_block block-15"
                                 style="
                                   height: 40px;
                                   line-height: 40px;
                                   font-size: 1px;
                                 "
                               >
                                  
                               </div>
                               <table
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 class="paragraph_block block-16"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                   word-break: break-word;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td
                                     class="pad"
                                     style="
                                       padding-bottom: 10px;
                                       padding-top: 10px;
                                     "
                                   >
                                     <div
                                       style="
                                         color: #101112;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: 0px;
                                         line-height: 150%;
                                         text-align: center;
                                         mso-line-height-alt: 21px;
                                       "
                                     >
                                       <p style="margin: 0">
                                         Please ensure that someone is available to
                                         receive the delivery during the scheduled
                                         time. If you need to reschedule or make
                                         any changes to your delivery details,
                                         please contact us at [Your Contact
                                         Details].
                                       </p>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                               <div
                                 class="spacer_block block-17"
                                 style="
                                   height: 10px;
                                   line-height: 10px;
                                   font-size: 1px;
                                 "
                               >
                                  
                               </div>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="paragraph_block block-18"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                   word-break: break-word;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <div
                                       style="
                                         color: #101112;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: 0px;
                                         line-height: 120%;
                                         text-align: center;
                                         mso-line-height-alt: 16.8px;
                                       "
                                     >
                                       <p style="margin: 0">
                                         Thank you for choosing our services!
                                       </p>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                               <div
                                 class="spacer_block block-19"
                                 style="
                                   height: 60px;
                                   line-height: 60px;
                                   font-size: 1px;
                                 "
                               >
                                  
                               </div>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="social_block block-20"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <div align="center" class="alignment">
                                       <table
                                         border="0"
                                         cellpadding="0"
                                         cellspacing="0"
                                         class="social-table"
                                         role="presentation"
                                         style="
                                           mso-table-lspace: 0pt;
                                           mso-table-rspace: 0pt;
                                           display: inline-block;
                                         "
                                         width="144px"
                                       >
                                         <tr>
                                           <td style="padding: 0 2px 0 2px">
                                             <a
                                               href="${links.facebook}"
                                               target="_blank"
                                               ><img
                                                 alt="Facebook"
                                                 height="32"
                                                 src="cid:facebook"
                                                 style="
                                                   display: block;
                                                   height: auto;
                                                   border: 0;
                                                 "
                                                 title="facebook"
                                                 width="32"
                                             /></a>
                                           </td>
                                           <td style="padding: 0 2px 0 2px">
                                             <a
                                               href="${links.twitter}"
                                               target="_blank"
                                               ><img
                                                 alt="Twitter"
                                                 height="32"
                                                 src="cid:twitter"
                                                 style="
                                                   display: block;
                                                   height: auto;
                                                   border: 0;
                                                 "
                                                 title="twitter"
                                                 width="32"
                                             /></a>
                                           </td>
                                           <td style="padding: 0 2px 0 2px">
                                             <a
                                               href="${links.linkedin}"
                                               target="_blank"
                                               ><img
                                                 alt="Linkedin"
                                                 height="32"
                                                 src="cid:linkedin"
                                                 style="
                                                   display: block;
                                                   height: auto;
                                                   border: 0;
                                                 "
                                                 title="linkedin"
                                                 width="32"
                                             /></a>
                                           </td>
                                           <td style="padding: 0 2px 0 2px">
                                             <a
                                               href="${links.instagram}"
                                               target="_blank"
                                               ><img
                                                 alt="Instagram"
                                                 height="32"
                                                 src="cid:instagram"
                                                 style="
                                                   display: block;
                                                   height: auto;
                                                   border: 0;
                                                 "
                                                 title="instagram"
                                                 width="32"
                                             /></a>
                                           </td>
                                         </tr>
                                       </table>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="heading_block block-21"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <h1
                                       style="
                                         margin: 0;
                                         color: #000000;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 16px;
                                         font-weight: 700;
                                         letter-spacing: normal;
                                         line-height: 120%;
                                         text-align: center;
                                         margin-top: 0;
                                         margin-bottom: 0;
                                       "
                                     >
                                       Follow Us
                                     </h1>
                                   </td>
                                 </tr>
                               </table>
                               <div
                                 class="spacer_block block-22"
                                 style="
                                   height: 30px;
                                   line-height: 30px;
                                   font-size: 1px;
                                 "
                               >
                                  
                               </div>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="paragraph_block block-23"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                   word-break: break-word;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <div
                                       style="
                                         color: #000000;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 700;
                                         letter-spacing: 0px;
                                         line-height: 120%;
                                         text-align: center;
                                         mso-line-height-alt: 16.8px;
                                       "
                                     >
                                       <p style="margin: 0">
                                         Edif. Gate Center, San Francisco, Cl. 67
                                         Panamá
                                       </p>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                               <table
                                 border="0"
                                 cellpadding="10"
                                 cellspacing="0"
                                 class="paragraph_block block-24"
                                 role="presentation"
                                 style="
                                   mso-table-lspace: 0pt;
                                   mso-table-rspace: 0pt;
                                   word-break: break-word;
                                 "
                                 width="100%"
                               >
                                 <tr>
                                   <td class="pad">
                                     <div
                                       style="
                                         color: #101112;
                                         direction: ltr;
                                         font-family: Arial, 'Helvetica Neue',
                                           Helvetica, sans-serif;
                                         font-size: 14px;
                                         font-weight: 400;
                                         letter-spacing: 0px;
                                         line-height: 120%;
                                         text-align: center;
                                         mso-line-height-alt: 16.8px;
                                       "
                                     >
                                       <p style="margin: 0">
                                         Copyright © 2023  
                                       </p>
                                     </div>
                                   </td>
                                 </tr>
                               </table>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </td>
           </tr>
         </tbody>
       </table>
       <!-- End -->
     </body>
   </html>
   `
   return email;
}

function accountCreated(data,links) {
let mail= `
<!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      @media (max-width: 520px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #fff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #fff;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #202053;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="5"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      src="cid:logoImage"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        max-width: 100px;
                                        width: 100%;
                                      "
                                      width="100"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 80px;
                                line-height: 80px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      src="cid:profile"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        max-width: 125px;
                                        width: 100%;
                                      "
                                      width="125"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-4"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 10px;
                                line-height: 10px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-5"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="heading_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="text-align: center; width: 100%"
                                >
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #101010;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 24px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    Welcome 
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-2"
                              style="
                                height: 20px;
                                line-height: 20px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="heading_block block-3"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="text-align: center; width: 100%"
                                >
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 600;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >"Congratulations!</span
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-6"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #292929;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 16.8px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Your account
                                      has been successfully created. You can now
                                      use your registered email and password to
                                      log in and access all the services of our
                                      platform. Thank you for joining us!".
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-2"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-7"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 30px;
                                line-height: 30px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-8"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 50px;
                                line-height: 50px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="social_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social-table"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        display: inline-block;
                                      "
                                      width="144px"
                                    >
                                      <tr>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.facebook}"
                                            target="_blank"
                                            ><img
                                              alt="Facebook"
                                              height="32"
                                              src="cid:facebook"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="Facebook"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.twitter}"
                                            target="_blank"
                                            ><img
                                              alt="Twitter"
                                              height="32"
                                              src="cid:twitter"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="Twitter"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.instagram}"
                                            target="_blank"
                                            ><img
                                              alt="Instagram"
                                              height="32"
                                              src="cid:instagram"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="Instagram"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.linkedin}"
                                            target="_blank"
                                            ><img
                                              alt="LinkedIn"
                                              height="32"
                                              src="cid:linkedin"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="LinkedIn"
                                              width="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-3"
                              style="
                                height: 10px;
                                line-height: 10px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-9"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="heading_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="text-align: center; width: 100%"
                                >
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 16px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >Follow Us</span
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-2"
                              style="
                                height: 20px;
                                line-height: 20px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-10"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #000000;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 14px;
                                      font-weight: 700;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 16.8px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Edif. Gate Center, San Francisco, Cl. 67
                                      Panamá
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-11"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #000000;
                                      direction: ltr;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        Arial, sans-serif;
                                      font-size: 12px;
                                      font-weight: 700;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 14.399999999999999px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Copyright © 2023   
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>
`
return mail;
}  

function orderPlaced(data,links) {
let email =`
<!DOCTYPE html>
<html  
lang="en"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:v="urn:schemas-microsoft-com:vml"
>
<head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <!--[if mso
    ]><xml
      ><o:OfficeDocumentSettings
        ><o:PixelsPerInch>96</o:PixelsPerInch
        ><o:AllowPNG /></o:OfficeDocumentSettings></xml
  ><![endif]-->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
    }

    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
    }

    p {
      line-height: inherit;
    }

    .desktop_hide,
    .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
    }

    .image_block img + div {
      display: none;
    }

    @media (max-width: 520px) {
      .desktop_hide table.icons-inner,
      .social_block.desktop_hide .social-table {
        display: inline-block !important;
      }

      .icons-inner {
        text-align: center;
      }

      .icons-inner td {
        margin: 0 auto;
      }

      .mobile_hide {
        display: none;
      }

      .row-content {
        width: 100% !important;
      }

      .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
      }

      .desktop_hide,
      .desktop_hide table {
        display: table !important;
        max-height: none !important;
      }
    }
  </style>
</head>
<body
  style="
    background-color: #fff;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  "
>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    class="nl-container"
    role="presentation"
    style="
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      background-color: #fff;
    "
    width="100%"
  >
    <tbody>
      <tr>
        <td>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-1"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #202053;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="center"
                                  class="alignment"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="cid:logoImage"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 100px;
                                      width: 100%;
                                    "
                                    width="100"
                                  />
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-2"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <div
                            class="spacer_block block-1"
                            style="
                              height: 30px;
                              line-height: 30px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-3"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="center"
                                  class="alignment"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="cid:tick"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 100px;
                                      width: 100%;
                                    "
                                    width="100"
                                  />
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-4"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="heading_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 24px;
                                    font-weight: 700;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: center;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  <span class="tinyMce-placeholder"
                                    >Order Placed</span
                                  >
                                </h1>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-5"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: center;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    We are excited
                                    to inform you that your order (#${data.trackingId}) has been<br />successfully
                                    placed.
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <div
                            class="spacer_block block-2"
                            style="
                              height: 30px;
                              line-height: 30px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-6"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="heading_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 20px;
                                    font-weight: 700;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: left;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  Sender Detail
                                </h1>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-7"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-top: 10px;
                                "
                              >
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Name:</strong>
                                    <span style="color: #909090"
                                      >${data.senderName}</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="paragraph_block block-2"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-top: 10px;
                                "
                              >
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Email: </strong
                                    ><span style="color: #909090">
                                      ${data.senderEmail}</span
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="paragraph_block block-3"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-top: 10px;
                                "
                              >
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Phone no:</strong> <span style="color: #909090;">${data.senderPhone}</span> 
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <div
                            class="spacer_block block-4"
                            style="
                              height: 30px;
                              line-height: 30px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-8"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="16.666666666666668%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="left"
                                  class="alignment"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="cid:recipient"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 33.33px;
                                      width: 100%;
                                    "
                                    width="33.33"
                                  />
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="83.33333333333333%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="heading_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 20px;
                                    font-weight: 700;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: left;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  <span class="tinyMce-placeholder"
                                    >Recipient Details</span
                                  >
                                </h1>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Name: </strong
                                    ><span style="color: #909090;">${data.receiverName}</span> 
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Email: </strong
                                    ><span style="color: #909090;">${data.senderEmail}</span> 
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="paragraph_block block-2"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Phone no:</strong> <span style="color: #909090;">${data.senderPhone}</span> 
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <div
                            class="spacer_block block-3"
                            style="
                              height: 30px;
                              line-height: 30px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-10"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="16.666666666666668%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="left"
                                  class="alignment"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="cid:delivery"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 29px;
                                      width: 100%;
                                    "
                                    width="29"
                                  />
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="83.33333333333333%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="heading_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 23px;
                                    font-weight: 700;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: left;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  <span class="tinyMce-placeholder"
                                    >Delivery Details</span
                                  >
                                </h1>
                              </td>
                            </tr>
                          </table>
                          <div
                            class="spacer_block block-2"
                            style="
                              height: 20px;
                              line-height: 20px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-11"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="16.666666666666668%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="left"
                                  class="alignment"
                                  style="line-height: 10px"
                                >
                                  <img
                                    src="cid:drop"
                                    style="
                                      display: block;
                                      height: auto;
                                      border: 0;
                                      max-width: 19px;
                                      width: 100%;
                                    "
                                    width="29.17"
                                  />
                                </div>
                              </td>
                            </tr>
                          </table>
                          <div
                            class="spacer_block block-2"
                            style="
                              height: 60px;
                              line-height: 60px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="83.33333333333333%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                          <tr>
                          <td class="pad" style="padding-bottom: 10px">
                            <div
                              style="
                                color: #000000;
                                direction: ltr;
                                font-family: Arial, 'Helvetica Neue',
                                  Helvetica, sans-serif;
                                font-size: 16px;
                                font-weight: 400;
                                letter-spacing: 0px;
                                line-height: 120%;
                                text-align: left;
                                mso-line-height-alt: 19.2px;
                              "
                            >
                              <p style="margin: 0; margin-bottom: 30px">
                                <strong
                                  >Pickup : 
                                </strong>${data.pickupAddress.corregimiento.title}, ${data.pickupAddress.district.title}, ${data.pickupAddress.province.title}  
                               
                              </p>
                              <p style="margin: 0; margin-bottom: 0px">
                                <strong> </strong>
                                <span style="color: #909090"
                                  ></span
                                >
                              </p>
                              <p style="margin: 0; margin-bottom: 16px">
                                <strong>Drop off : </strong>${data.pickupAddress.corregimiento.title}, ${data.pickupAddress.district.title}, ${data.pickupAddress.province.title}  
                              </p>
                          
                            </div>
                          </td>
                        </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-12"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="heading_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 23px;
                                    font-weight: 700;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: left;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  Parcel Details
                                </h1>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-13"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Order ID</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.trackingId}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-13"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Type of shipment</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.shipmentType.title}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-14"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Category</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.category.title}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-15"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Size</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                  ${data.length * 1} * ${data.width * 1} * ${data.height * 1} cm<sup>3</sup> (${data.size.title})
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-16"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Weight</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.weight}${data.weightUnitB.symbol}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-17"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Distance</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.distance}km</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-18"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Pickup Date</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.pickupDate}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-19"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>ETA</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">${data.ETA}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-20"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: left;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong>Order Amount</strong>
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          class="column column-2"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="50%"
                        >
                          <table
                            border="0"
                            cellpadding="5"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: right;
                                    mso-line-height-alt: 19.2px;
                                  "
                                >
                                  <p style="margin: 0">$${data.total}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-21"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <div
                            class="spacer_block block-1"
                            style="
                              height: 20px;
                              line-height: 20px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-22"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #909090;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 150%;
                                    text-align: center;
                                    mso-line-height-alt: 21px;
                                  "
                                >
                                  <p style="margin: 0">
                                    Our team is committed to ensuring your
                                    order arrives in excellent condition and
                                    on time. You can track the progress of
                                    your delivery using the provided tracking
                                    number.<br />If you have any questions or
                                    need assistance, to reach out to our
                                    customer support team at support@theshippinghack.com 
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-23"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div
                                  style="
                                    color: #828282;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: center;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    Thank you for choosing our services!
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <div
                            class="spacer_block block-2"
                            style="
                              height: 40px;
                              line-height: 40px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="social_block block-3"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div align="center" class="alignment">
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social-table"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      display: inline-block;
                                    "
                                    width="144px"
                                  >
                                    <tr>
                                      <td style="padding: 0 2px 0 2px">
                                        <a
                                          href="${links.facebook}"
                                          target="_blank"
                                          ><img
                                            alt="Facebook"
                                            height="32"
                                            src="cid:facebook"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Facebook"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 2px 0 2px">
                                        <a
                                          href="${links.twitter}"
                                          target="_blank"
                                          ><img
                                            alt="Twitter"
                                            height="32"
                                            src="cid:twitter"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Twitter"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 2px 0 2px">
                                        <a
                                          href="${links.instagram}"
                                          target="_blank"
                                          ><img
                                            alt="Instagram"
                                            height="32"
                                            src="cid:instagram"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Instagram"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 2px 0 2px">
                                        <a
                                          href="${links.linkedin}"
                                          target="_blank"
                                          ><img
                                            alt="LinkedIn"
                                            height="32"
                                            src="cid:linkedin"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="LinkedIn"
                                            width="32"
                                        /></a>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-24"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="heading_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="text-align: center; width: 100%"
                              >
                                <h1
                                  style="
                                    margin: 0;
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 16px;
                                    font-weight: 700;
                                    letter-spacing: normal;
                                    line-height: 120%;
                                    text-align: center;
                                    margin-top: 0;
                                    margin-bottom: 0;
                                  "
                                >
                                  Follow Us
                                </h1>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-25"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-radius: 0;
                      color: #000;
                      width: 500px;
                      margin: 0 auto;
                    "
                    width="500"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            padding-bottom: 5px;
                            padding-top: 5px;
                            vertical-align: top;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="paragraph_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-left: 10px;
                                  padding-right: 10px;
                                "
                              >
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: center;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    <strong
                                      >Edif. Gate Center, San Francisco, Cl.
                                      67 Panamá</strong
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="paragraph_block block-2"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 5px;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                "
                              >
                                <div
                                  style="
                                    color: #000000;
                                    direction: ltr;
                                    font-family: Arial, 'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    font-size: 14px;
                                    font-weight: 400;
                                    letter-spacing: 0px;
                                    line-height: 120%;
                                    text-align: center;
                                    mso-line-height-alt: 16.8px;
                                  "
                                >
                                  <p style="margin: 0">
                                    Copyright © 2023  
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- End -->
</body>
</html>
`
return email;
}

function pickupDelivery(data,links,button) {

let email =`
<!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      @media (max-width: 520px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #fff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #fff;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #202053;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <img
                                      src="cid:logoImage"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        max-width: 100px;
                                        width: 100%;
                                      "
                                      width="100"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-radius: 0;
                        color: #000;
                        width: 500px;
                        margin: 0 auto;
                      "
                      width="500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="
                                      background-color: #202053;
                                      width: 100px;
                                      height: 100px;
                                      margin: 0 auto;
                                      padding: 24px;
                                      border-radius: 50%;
                                    "
                                  >
                                    <img
                                      src="cid:calender"
                                      style="
                                        display: block;
                                        height: auto;
                                        border: 0;
                                        width: 50px;
                                        height: 50px;
                                      "
                                      width="100"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-3"
                              style="
                                height: 20px;
                                line-height: 20px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #000000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 16px;
                                          text-align: center;
                                          mso-line-height-alt: 19.2px;
                                        "
                                      >
                                        <span style="font-size: 24px"
                                          ><strong
                                            >Pick-up your delivery</strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="text_block block-5"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div style="font-family: sans-serif">
                                    <div
                                      class=""
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #000000;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                          mso-line-height-alt: 16.8px;
                                        "
                                      >
                                        Your parcel is currently at our
                                        warehouse. We kindly request your
                                        presence to ensure a smooth pickup
                                        process.
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-6"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-7"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 20px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    Parcel Details :
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-8"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #1a1a1a;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <strong>Tracking Number:</strong> ${data.trackingId}
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-11"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #1a1a1a;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <strong>Pickup Hours:</strong> 9:15am - 11:30am
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-9"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #1a1a1a;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: left;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <strong>Warehouse Address:</strong>  ${data.deliveryWarehouse.addressDB.combinedPostal}, ${data.deliveryWarehouse.addressDB.buildingName}, ${data.deliveryWarehouse.addressDB.corregimiento.title}, ${data.deliveryWarehouse.addressDB.district.title}, ${data.deliveryWarehouse.addressDB.province.title}, Panama 
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            
                            <div
                              class="spacer_block block-12"
                              style="
                                height: 20px;
                                line-height: 40px;
                                font-size: 1px;
                              "
                            >
                            </div>
                            ${button}
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-13"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 10px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 150%;
                                      text-align: center;
                                      mso-line-height-alt: 21px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Please bring along a valid ID and the
                                      tracking number mentioned above when you
                                      come to collect the parcel to confirm your
                                      identity.<br />If you have any question or
                                      require further assistance, feel free to
                                      contact our customer services at [Customer
                                      Service Contact Information].
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-14"
                              style="
                                height: 10px;
                                line-height: 10px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-15"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 16.8px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Thank you for choosing our services!
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-16"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="social_block block-17"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social-table"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        display: inline-block;
                                      "
                                      width="144px"
                                    >
                                      <tr>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.facebook}"
                                            target="_blank"
                                            ><img
                                              alt="Facebook"
                                              height="32"
                                              src="cid:facebook"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="facebook"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.twitter}"
                                            target="_blank"
                                            ><img
                                              alt="Twitter"
                                              height="32"
                                              src="cid:twitter"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="twitter"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.linkedin}"
                                            target="_blank"
                                            ><img
                                              alt="Linkedin"
                                              height="32"
                                              src="cid:linkedin"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="linkedin"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="${links.instagram}"
                                            target="_blank"
                                            ><img
                                              alt="Instagram"
                                              height="32"
                                              src="cid:instagram"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="instagram"
                                              width="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-18"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h1
                                    style="
                                      margin: 0;
                                      color: #000000;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 16px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    Follow Us
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-19"
                              style="
                                height: 30px;
                                line-height: 30px;
                                font-size: 1px;
                              "
                            >
                               
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-20"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #000000;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 700;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 16.8px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Edif. Gate Center, San Francisco, Cl. 67
                                      Panamá
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="paragraph_block block-21"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div
                                    style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: Arial, 'Helvetica Neue',
                                        Helvetica, sans-serif;
                                      font-size: 14px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 16.8px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Copyright © 2023  
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>
`
return email
}
module.exports = {
pickupDelivery,accountCreated,orderPlaced,
emailOTP,socialMediaLinks,emailButton,scheduleDelivery,registeruserEmail, forgetuserEmail, createBooking,
// dispatch,receivedAtWarehouse,
// otpPassReset,readyForDeliver,
//old emails
// registeruserEmail, forgetuserEmail, createBooking, orderCompleted ,
};