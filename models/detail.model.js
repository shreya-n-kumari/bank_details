const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema ({
    bankName : {type: String, required:true},
    account : {type : Number, requried:true},
    ifsc : {type : Number, required:true} 
});

module.exports = mongoose.model('bank_detail', detailSchema);