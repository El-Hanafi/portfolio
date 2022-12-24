const projectSchema = require('../models/projectModel');

//.......get project user.........
exports.getProject = async (req, res)=>{

    try {
        const project = await projectSchema.find(req.body);

        res.json(project);
    } catch(error) {
        res.status(500).json({msg: error});
    }

    //...........second way
    // projectSchema.find()
    // .then(project=>res.json(project))
    // .catch(err=>res.status(500).json(`error: ${err}`))

}

//....... add specific user 
exports.addProject = async (req, res) => {
    const {title, project_id, description, images} = req.body;

    try {

        const newProject = new projectSchema({
            project_id,
            title, 
            description, 
            images
        });

        await newProject.save();
        res.json({msg: "project added"});

    } catch (error) {
        res.status(500).json({msg:error.message})
    }

    // ............second way promises
    // const newProject = new projectSchema({
    //     project
    // })

    // newProject.save()
    // .then(project=>res.json('the article was sended'))
    // .catch(err=>res.status(500).json(`error:$(err)`))

    
}

//........... get specific project user by id
exports.getProjectId = async (req,res)=>{

    //..................second way
    try {
        let project = await projectSchema.findById(req.params.id);
        res.json(project);
    } catch (err) {
        res.status(500).json({msg:'server problem'});
    }

    //...........first way
    // projectSchema.findById(req.params.id)
    // .then(project=>res.json(project))
    // .catch(err=>res.status(400).json({msg: err}))
}

//........... update specific project user by id
exports.updateProject = async (req, res)=>{
    const {title, project_id, description, images} = req.body;

    try {
        const newProject = await projectSchema.findByIdAndUpdate(req.params.id, {
            title, 
            project_id, 
            description, 
            images
        });
    
        let results = await newProject.save();
        await results;
        res.json({msg: 'item update'})
    } catch (error) {
        res.status(500).json({msg:'server problem'});
    } 
}

//............ delete specific user by id
exports.deleteProject = async (req, res)=>{
    let project = await projectSchema.findByIdAndDelete(req.params.id);

    project;

    res.json({msg: 'item deleted'})
}
