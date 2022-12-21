 exports.getAbout = (req, res) => {
    res.send("hello from get about")
 };


exports.addAbout = (req, res)=>{
	res.send('hello from add about');
}


exports.getAboutId = (req,res)=>{
    res.send('hello from specific user')
}

exports.updateAbout = (req,res)=>{
    res.send('hello from updated specific user')
}

exports.deleteAbout = (req,res)=>{
    res.send('hello from deleted specific user router')
}
