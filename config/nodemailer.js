import nodemailer from 'nodemailer';
import 'dotenv/config'

const mailTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure:false,
    auth: {
        user:process.env.SMTP_EMAIL_ADDRESS,
        pass: process.env.SMTP_EMAIL_PASSWORD
    }
})

export default mailTransporter