const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.MONGODB_URI ;



mongoose.connect( 'mongodb://localhost:27017/photo_upload', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})  
.then(() => console.log('MongoDB connected :)'))
.catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
  User: require('./User'),
}