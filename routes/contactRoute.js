const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req,res)=>{
    res.send('contacted')
});

router.post('/', (req,res)=>{

    let data = req.body ;

    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        //the port to connect
        port:465,
        //for aunthentication
        auth:{
            user:'m.h.benabbou@gmail.com',
            pass:process.env.EMAIL_PASSWORD
        }
    })

    let mailOptions = {
        from: data.email,
        to:'m.h.benabbou@gmail.com',
        subject:`Message from ${data.name}`,
        html:`
        <h3>Information</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }

    smtpTransport.sendMail(mailOptions, (err,res)=>{
        try {

            if(err) return res.status(400).json({msg: err})

            else {
                return res.status(200).json({msg:`Message was sent`})
            }

        } catch (error) {
            res.status(500).json({msg:error})
        }
    });

});





module.exports = router;