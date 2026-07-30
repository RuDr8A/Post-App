const mongoose = require('mongoose')

async function connectDB() {
    await mongoose.connect('mongodb+srv://Backend:jmuHQutGzgtoKlDB@complete-backend.sbjna62.mongodb.net/project-1')
    console.log('Connected to DB');
    
}

module.exports = connectDB 