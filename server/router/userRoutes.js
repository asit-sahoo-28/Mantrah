// import express from "express"
// import {forgetPassword, getUser, login, logout, registerUser, resetPassword} from "../controllers/authController.js"
// import multer from "multer"
// import { isAuthenticated } from "../middlewares/authMiddleware.js";


// const router=express.Router();


// router.post("/register",registerUser);
// router.post("/login",login);
// router.get("/logout",isAuthenticated, logout);
// router.get("/me",isAuthenticated,getUser);
// router.post("/password/forget",forgetPassword);
// router.put("/password/reset/:token",resetPassword);
// export default router;
















// import express from "express";
// import {
//   forgetPasswordOTP,
//   resetPasswordWithOTP,
//   getUser,
//   login,
//   logout,
//   registerUser,
// } from "../controllers/authController.js";
// import { isAuthenticated } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // ---------------- AUTH ROUTES ----------------
// router.post("/register", registerUser);           // Register
// router.post("/login", login);                     // Login
// router.post("/logout", isAuthenticated, logout);  // Logout
// router.get("/me", isAuthenticated, getUser);     // Get current user

// // ---------------- PASSWORD RESET (OTP) ----------------
// router.post("/password/forget", forgetPasswordOTP);      // Send OTP to email
// router.post("/password/reset", resetPasswordWithOTP);    // Reset password using OTP

// export default router;
