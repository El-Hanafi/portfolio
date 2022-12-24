const aboutSchema = require('../models/aboutModel');

//.......get about user.........
exports.getAbout = async (req, res)=>{
    const about = await aboutSchema.find();

    try {
        res.json(about);
    } catch(error) {
        res.status(500).json({msg: 'server problem'});
    }

    //...........second way
    // aboutSchema.find()
    // .then(about=>res.json(about))
    // .catch(err=>res.status(500).json(`error: ${err}`))

}

//....... add specific user 
exports.addAbout = async (req, res) => {
    try {
        const {about} = req.body;

        const newAbout = new aboutSchema({
        about
        });

        await newAbout.save();
        res.json(newAbout);

    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }

    // ............second way promises
    // const newAbout = new aboutSchema({
    //     about
    // })

    // newAbout.save()
    // .then(about=>res.json('the article was sended'))
    // .catch(err=>res.status(500).json(`error:$(err)`))

    
}

//........... get specific about user by id
exports.getAboutId = async (req,res)=>{

    //..................second way
    try {
        const about = await aboutSchema.findById(req.params.id);
        res.json(about);
    } catch (err) {
        res.status(500).json({msg:'server problem'});
    }

    //...........first way
    // aboutSchema.findById(req.params.id)
    // .then(about=>res.json(about))
    // .catch(err=>res.status(400).json({msg: err}))
}

//........... update specific about user by id
exports.updateAbout = async (req, res)=>{
    const {about} = req.body;

    try {
        const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
            about
        });
    
        let results = await newAbout.save();
        await results;
        res.json({msg: 'item update'})
    } catch (error) {
        res.status(500).json({msg:'server problem'});
    } 
}

//............ delete specific user by id
exports.deleteAbout = async (req, res)=>{
    const about = await aboutSchema.findByIdAndDelete(req.params.id);

    about;

    res.json({msg: 'item deleted'})
}
