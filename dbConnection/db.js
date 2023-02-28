const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/bank_details';

const connectDB = ()=>{
    mongoose.connect(url, {useNewUrlParser:true}, (err)=>{
        if(err) throw err;
        console.log('Database connection successfully!');
    })
}
  

module.exports = connectDB;