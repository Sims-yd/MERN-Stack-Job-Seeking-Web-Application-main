import mongoose from "mongoose";
import 'esm';

import dotenv from 'dotenv';
dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
