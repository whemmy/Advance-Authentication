const sgMail = require('@sendgrid/mail')

const sendEmail = async ({ to, subject, html }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: 'yusufmustaphaadewale@gmail.com', // Change to your verified sender
    to,
    subject,
    text: 'Testing',
    html,
  }

  sgMail.send(msg)
  // res.json(info)
}

module.exports = sendEmail
