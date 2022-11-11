const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    Lastname: {
        type : String,
        require : true,
    },
    email: {
        type : String,
        require : true,
    },
    password: {
        type : String,
        require : true,
    },
    role: {
        type : String,
        require : true,
    },
    active: {
        type : Boolean,
        require : true,
    },
    avatar: {
        type : String,
        require : true,
    },

});

module.exports = mongoose.model("User",UserSchema);