const experienceSchema = require('../models/experienceModel');

//.......get experience user.........
exports.getExperience = async (req, res)=>{
    const experience = await experienceSchema.find();

    try {
        res.json(experience);
    } catch(error) {
        res.status(500).json({msg: 'server problem'});
    }

    //...........second way
    // experienceSchema.find()
    // .then(experience=>res.json(experience))
    // .catch(err=>res.status(500).json(`error: ${err}`))

}

//....... add specific user 
exports.addExperience = async (req, res) => {
    try {
        const {experience} = req.body;

        const newExperience = new experienceSchema({
        experience
        });

        await newExperience.save();
        res.json(newExperience);

    } catch (error) {
        res.status(500).json({msg:'server problem'})
    }

    // ............second way promises
    // const newExperience = new experienceSchema({
    //     experience
    // })

    // newExperience.save()
    // .then(experience=>res.json('the article was sended'))
    // .catch(err=>res.status(500).json(`error:$(err)`))

    
}

//........... get specific experience user by id
exports.getExperienceId = async (req,res)=>{

    //..................second way
    try {
        const experience = await experienceSchema.findById(req.params.id);
        res.json(experience);
    } catch (err) {
        res.status(500).json({msg:'server problem'});
    }

    //...........first way
    // experienceSchema.findById(req.params.id)
    // .then(experience=>res.json(experience))
    // .catch(err=>res.status(400).json({msg: err}))
}

//........... update specific experience user by id
exports.updateExperience = async (req, res)=>{
    const {experience} = req.body;

    try {
        const newExperience = await experienceSchema.findByIdAndUpdate(req.params.id, {
            experience
        });
    
        let results = await newExperience.save();
        await results;
        res.json({msg: 'item update'})
    } catch (error) {
        res.status(500).json({msg:'server problem'});
    } 
}

//............ delete specific user by id
exports.deleteExperience = async (req, res)=>{
    const experience = await experienceSchema.findByIdAndDelete(req.params.id);

    experience;

    res.json({msg: 'item deleted'})
}
