const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
        ,get: function(date) {
            return date.toLocaleDateString('en-US');
        }
    },
    userId:Number,
   username :String,
   password : String,
   email :String
})

const User = mongoose.model("User",UserSchema);
module.exports = User