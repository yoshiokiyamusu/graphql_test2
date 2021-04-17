const mongoose = require("mongoose");
const { Schema } = mongoose;

const podcastSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});

const Podcast = mongoose.model("Podcast", podcastSchema);



const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
});
  
const User = mongoose.model("User", userSchema);
  


module.exports = { Podcast, User };
