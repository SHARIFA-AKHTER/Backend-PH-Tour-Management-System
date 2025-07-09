// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import { Server } from "http";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import app from "./app";

// dotenv.config();

// let server: Server;


// const startServer = async () => {
//   try {

//     const DB_USER = process.env.DB_USER;
//     const DB_PASS = process.env.DB_PASS;
//     const DB_NAME = process.env.DB_NAME;

//     const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.5di9a.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

//     await mongoose.connect(uri);
//     console.log("✅ Connected to MongoDB!");


//     server = app.listen(5000, () => {
//       console.log("✅ Server is listening on port 5000");
//     });
//   } catch (error) {
//     console.error("❌ Connection error:", error);
//   }
// };

// startServer();

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Server } from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
import { envVars } from "./app/config/env";

dotenv.config();

let server: Server;
//bujanor jonno reke delam
// await mongoose.connect("mongodb+srv://userAdmin:Ez2GFgwDwx9KHnAU@cluster0.5di9a.mongodb.net/tour-db?retryWrites=true&w=majority&appName=Cluster0")

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL)
    console.log("✅ Connected to MongoDB!");


    server = app.listen(envVars.PORT, () => {
      console.log(`✅ Server is listening on port 5000 ${envVars.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();


