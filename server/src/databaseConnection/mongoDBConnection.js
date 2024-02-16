import mongoose from "mongoose";

let connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pranjal:pranjal@jobboard.4ble1fp.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Our application is connected to MongoDB successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongoDB;
