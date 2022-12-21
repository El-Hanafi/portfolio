require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/aboutRoute');



const app = express();


//middleware
app.use(express.json());
app.use(cors());

// routes
// app.get('/', (req, res)=> {

//     res.send('hello from server')
// });

// get about user
app.use('/', require('./routes/aboutRoute'));





PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening inp port: ${PORT}`)
})
