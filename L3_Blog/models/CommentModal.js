const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    CreatedAt: {
        type: Date,
        default: Date.now
        ,get: function(date) {
            return date.toLocaleDateString('en-US');
        }
    },
    PostId:Number,
    UserId:Number,
    Comments:String
})

const CommentModal = mongoose.model("Comment",CommentSchema);
module.exports = CommentModal
