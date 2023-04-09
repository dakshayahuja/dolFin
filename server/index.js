import express from "express";
import mongoose from "mongoose";

const app = new express();
const port = 3000;
const MONGO_URL = "mongodb+srv://dakshay:dolFin@cluster.aufzslf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
