const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jpdhinesh:ckzalegJza4b09WD@mern-blog-v1.qoypue9.mongodb.net/mern-blog?retryWrites=true&w=majority"
    );
    console.log("DB has been connected");
  } catch (error) {
    console.log("DB connection failed", error.message);
  }
};

module.exports = connectDB;
