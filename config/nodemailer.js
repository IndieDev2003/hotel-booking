import nodemailer from 'nodemailer';
import 'dotenv/config'


const transporter = nodemailer.createTransport({
    host: process.envSMTP_HOST,
    port: process.envSMTP_PORT,
    secure:false,
    auth: {
        user:process.env.SMTP_EMAIL_ADDRESS,
        pass: process.env.SMTP_EMAIL_PASSWORD
    }
})

export default transporter