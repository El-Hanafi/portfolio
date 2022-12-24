require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/aboutRoute');
const fileUpload = require('express-fileupload');



const app = express();


//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));

//.................connect to mongodb
const URI = process.env.MONGO_URL;

mongoose.set('strictQuery', false);

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}, (err)=>{

    if(err) throw err;
    else{
        return console.log('mongodb connected successfully')
    }
});

// ...............routes
// app.get('/', (req, res)=> {

//     res.send('hello from server')
// });

// routes
app.use('/', require('./routes/aboutRoute'));
app.use('/', require('./routes/educRoute'));
app.use('/', require('./routes/experienceRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/', require('./routes/projectRoute'));
app.use('/', require('./routes/upload'));






PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening inp port: ${PORT}`)
})
