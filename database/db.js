require("dotenv").config();
const mongoose = require("mongoose");

const dbPassword = process.env.DBPASSWORD;

const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://psirothi:${dbPassword}@cluster0.eml8f86.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Mongodb connected successfully");
  } catch (e) {
    console.error("Mongodb connection failed", e);
    process.exit(1);
  }
};

module.exports = connectToDB;
