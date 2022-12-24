const educationSchema = require('../models/educModel');

//.......get education user.........
exports.getEducation = async (req, res)=>{
    const education = await educationSchema.find();

    try {
        res.json(education);
    } catch(error) {
        res.status(500).json({msg: 'server problem'});
    }

    //...........second way
    // educationSchema.find()
    // .then(education=>res.json(education))
    // .catch(err=>res.status(500).json(`error: ${err}`))

}

//....... add specific user 
exports.addEducation = async (req, res) => {
    try {
        const {education} = req.body;

        const newEducation = new educationSchema({
        education
        });

        await newEducation.save();
        res.json(newEducation);

    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }

    // ............second way promises
    // const newEducation = new educationSchema({
    //     education
    // })

    // newEducation.save()
    // .then(education=>res.json('the article was sended'))
    // .catch(err=>res.status(500).json(`error:$(err)`))

    
}

//........... get specific education user by id
exports.getEducationId = async (req,res)=>{

    //..................second way
    try {
        const education = await educationSchema.findById(req.params.id);
        res.json(education);
    } catch (err) {
        res.status(500).json({msg:'server problem'});
    }

    //...........first way
    // educationSchema.findById(req.params.id)
    // .then(education=>res.json(education))
    // .catch(err=>res.status(400).json({msg: err}))
}

//........... update specific education user by id
exports.updateEducation = async (req, res)=>{
    const {education} = req.body;

    try {
        const newEducation = await educationSchema.findByIdAndUpdate(req.params.id, {
            education
        });
    
        let results = await newEducation.save();
        await results;
        res.json({msg: 'item update'})
    } catch (error) {
        res.status(500).json({msg:'server problem'});
    } 
}

//............ delete specific user by id
exports.deleteEducation = async (req, res)=>{
    const education = await educationSchema.findByIdAndDelete(req.params.id);

    education;

    res.json({msg: 'item deleted'})
}
