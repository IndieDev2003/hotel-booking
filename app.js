import express from 'express';
import transporter from './config/nodemailer.js';
import connectDB from './config/db.js';


import 'dotenv/config'
const port = process.env.PORT || 4000

const app = express();

await connectDB();
app.get('/', (req, res) => {
    res.send('Hello, World!');
})



const mailOptions = {
  from: ` "Gagan Suman" <fbdgagansuman@gmail.com `,
  to: 'reeuuinsta@proton.me',
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer and Brevo!',
};
try {
  transporter.sendMail (mailOptions, (error, info) => {
    if (error) {
      return console.log ('Error:', error);
    }
    console.log ('Message sent: %s', info.messageId);
  });
} catch (error) {
  console.log (error.message);
}

 



app.listen(port,()=>console.log(`Server listening on ${port}`))