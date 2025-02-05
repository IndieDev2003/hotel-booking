import express from 'express';
import connectDB from './config/db.js';

import 'dotenv/config'
const port = process.env.PORT || 4000

const app = express();

await connectDB();
app.get('/', (req, res) => {
    res.send('Hello, World!');
})


app.listen(port,()=>console.log(`Server listening on ${port}`))