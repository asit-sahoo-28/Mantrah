// import { connectDB } from "./config/db.js";
// import app from "./app.js";


// connectDB()

// const PORT=process.env.PORT || 4000;
// const server=app.listen(PORT,()=>{
//     console.log(`Server is runing on port ${PORT}`)
// })

// app.get("/",(req,res)=>{
//     res.send("Api is working")
// })


// // process.on("unhandledRejection",(err)=>{
// //     console.error(`unhandle Rejection: ${err.message}`);
// //     server.close(()=>process.exit(1));
// // })


// // process.on("uncaughtException",(err)=>{
// //     console.error(`uncaught Exception: ${err.message}`);
// //     process.exit(1);
// // })


// export default server;





import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./router/userrouter.js";
import { connectCloudinary } from "./config/cloudinary.js";

config();
connectDB();
connectCloudinary();

const app = express();

// CORS setup - allow your frontend origin
// app.use(
//   cors({
//     origin: ["http://localhost:5173"], // frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cors())
// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route for quick check
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// Your content API routes
app.use("/api/content", router);

// Start server on PORT
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Optional: handle errors gracefully (uncomment if you want)
/*
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});
*/

export default server;
