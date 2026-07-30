const express = require('express') 
const postModel = require('./models/post.model')
const multer = require('multer')



// server is create
const app = express()
app.use(express.json())

const upload = multer({storage : multer.memoryStorage()})

app.post('/create-post', upload.single('image'), async (req, res) =>{
    console.log(req.body)
    console.log(req.file);
    res.status(200).json({ message: "File uploaded successfully!" });
    
})

module.exports = app 