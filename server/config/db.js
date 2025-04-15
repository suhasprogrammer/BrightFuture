const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://suhasb640:jTqgczizUzQwfsJB@cluster0.iybgy.mongodb.net/Anantadi?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
