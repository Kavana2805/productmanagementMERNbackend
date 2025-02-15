const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {type:String, required:true },
    sportsCategory: {type:String,default:"General"},
});

module.exports=mongoose.model("Product",productSchema);

const mongoose = require('mongoose');

