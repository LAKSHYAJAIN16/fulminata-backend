const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
{
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    user : {
      type : Object,
      required : false
    },
    categories: {
      type: Array,
      required: false,
    },
    views:{
      type : Number,
      required : false
    },
    likes:{
      type : Number,
      required : false
    },
    comments:{
      type : Array,
      required : false
    },
    imber:{
      type : Number,
      required : false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);