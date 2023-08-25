const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
   CateogryId:Number,
   CategoryName:String
})

const CategoryModel = mongoose.model("Category",CategorySchema);
module.exports = CategoryModel
