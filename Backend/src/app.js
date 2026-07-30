const express = require('express') 
const postModel = require('./models/post.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')





// server is create
const app = express()
app.use(express.json())

const upload = multer({storage : multer.memoryStorage()})

app.post('/create-post', upload.single('image'), async (req, res) =>{
    
    const imageKitResult = await uploadFile(req.file.buffer)

    const newPost = await postModel.create({
        image : imageKitResult.url,
        caption : req.body.caption
    })

    res.status(201).json({ 
            message: "Post created successfully!",
            post: newPost
    });
    
})
app.get('/posts', async (req, res) =>{
    const posts = await postModel.find() ;
    res.status(200).json({
        message : "Fetched successfully",
        posts : posts
    })
})

module.exports = app 