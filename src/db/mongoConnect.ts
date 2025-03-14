import mongoose from "mongoose";

//Connect to DB

const mongoConnect = async (url: string) => {
  await mongoose.connect(url);
  const connection = mongoose.connection;

  connection.on("connect", () => {
    console.log("Connected to MongoDB successfully ✅");
  });

  connection.on("error", (err) => {
    console.error(`Error connecting to MongoDB: ${err.message} 🙅‍♂️`);
    console.log("\x1b[31mShutting down server...\x1b[0m");
    process.exit(1);
  });
};

export default mongoConnect;
