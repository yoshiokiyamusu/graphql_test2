
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
});
  
const User = mongoose.model("User", userSchema);
  
module.exports = { User };

