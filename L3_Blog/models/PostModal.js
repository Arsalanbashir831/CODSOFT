const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    CreatedAt: {
        type: Date,
        default: Date.now
        ,get: function(date) {
            return date.toLocaleDateString('en-US');
        }
    },
    PostId:Number,
    UserId:Number,
    PostDesc:String,
    PostTitle:String,
    CategoryId:Number,
    Picture:String
})

const PostModal = mongoose.model("Post",PostSchema);
module.exports = PostModal