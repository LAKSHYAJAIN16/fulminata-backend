const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
      required: false,
    },
    country: {
      type: String,
      default: "unknown",
      required: true,
    },
    age: {
      type: Number,
      default: 0,
      required: true,
    },
    gender: {
      type: String,
      default: "unknown",
      required: true,
    },
    followers: {
      type: Number,
      required: false,
    },
    followedUsers: {
      type: Array,
      required: false,
    },
    likedPosts: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
