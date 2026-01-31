// import  {asycHandler} from "../middlewares/asyncHandler.js";
// import ErrorHandler from "../middlewares/error.js";
// import { User } from "../models/User.js";
// import { sendEmail } from "../services/emailService.js";
// import { generateForgetPasswordEmailTemplate } from "../utils/emailTemplates.js";
// import { generateToken } from "../utils/generateToken.js";
// import crypto from "crypto"
// import jwt from "jsonwebtoken"



// export const registerUser=asycHandler(async(req,res,next)=>{
//     const {name,email,password,role}=req.body;
//     if(!name || !email || !password || !role){
//         return next(new ErrorHandler("Please Provide All the Required fields",400));

//     }
//     let user=await User.findOne({email})
//     if(user){
//         return next(new ErrorHandler("User already exist",400))
//     }
//     user=new User({name,email,password,role});
//     await user.save();
//     // res.status(201).json({
//     //     success:ture,
//     //     message:"User registerd successfully",
//     // })
//     generateToken(user,201,"User registerd successfully",res);
// });

// export const login=asycHandler(async(req,res,next)=>{
//     const {email,password,role}=req.body;
//     if(!email || !password || !role){
//         return next(new ErrorHandler("Please provide all required fieldes",400))
//     }
//     const user=await User.findOne({email,role}).select("+password");
//     if(!user){
//         return next(new ErrorHandler("Invalid email,password or role",401));
//     }
//     const isPasswordMatched=await user.comparePassword(password);

//     if(!isPasswordMatched){
//         return next(new ErrorHandler("Invalid email,password or role",401));

//     }
//     generateToken(user,200,"Logged in successfully",res)
// })

// export const logout = asycHandler(async(req,res,next)=>{
//     res.status(200).cookie("token","",{
//         expires:new Date(Date.now()),
//         httpOnly:true,

//     }).json({
//         success:true,
//         message:"Logged out successfully",
//     })
// })





// export const getUser=asycHandler(async(req,res,next)=>{
//     const user=req.user;
//     res.status(200).json({
//         success:true,
//         user,
//     });
// });





// // -------------------- FORGET PASSWORD --------------------
// export const forgetPassword = asycHandler(async (req, res, next) => {
//   const { email } = req.body;

//   // Find user
//   const user = await User.findOne({ email });
//   if (!user) return next(new ErrorHandler("User not found", 404));

//   // Generate token and save
//   const resetToken = user.getResetPasswordToken();
//   await user.save({ validateBeforeSave: false });

//   // Send email
//   const message = generateForgetPasswordEmailTemplate(resetToken);
//   await sendEmail({
//     to: user.email,
//     subject: "ERP System Password Reset",
//     message,
//   });

//   res.status(200).json({
//     success: true,
//     message: `Password reset token sent to ${user.email}`,
//   });
// });

// // -------------------- RESET PASSWORD --------------------
// export const resetPassword = asycHandler(async (req, res, next) => {
//   let { token } = req.params;

//   // Clean token (handle messy token if copied from email)
//   const match = token.match(/[a-f0-9]{20,}/i);
//   token = match ? match[0] : null;
//   if (!token) return next(new ErrorHandler("Invalid token format", 400));

//   // Hash token to compare with DB
//   const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

//   // Find user by token and check expiration
//   const user = await User.findOne({
//     resetPasswordToken,
//     resetPasswordExpire: { $gt: Date.now() },
//   });

//   if (!user) return next(new ErrorHandler("Invalid or expired password reset token", 400));

//   const { password, confirmPassword } = req.body;
//   if (!password || !confirmPassword) return next(new ErrorHandler("Please provide all required fields", 400));
//   if (password !== confirmPassword) return next(new ErrorHandler("Password and confirm password do not match", 400));

//   // Update password & clear reset fields
//   user.password = password;
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;
//   await user.save();

//   // Auto-login: return JWT
//   const tokenJWT = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, { expiresIn: process.env.JWT_EXPIRE });

//   res.status(200).json({ success: true, message: "Password reset successful", token: tokenJWT });
// });























// import { asycHandler } from "../middlewares/asyncHandler.js";
// import ErrorHandler from "../middlewares/error.js";
// import { User } from "../models/User.js";
// import { sendEmail } from "../services/emailService.js";
// import jwt from "jsonwebtoken";

// // ------------------ REGISTER ------------------
// export const registerUser = asycHandler(async (req, res, next) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return next(new ErrorHandler("Please provide all required fields", 400));
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) return next(new ErrorHandler("User already exists", 400));

//   const user = await User.create({ name, email, password, role });

//   // Send JWT
//   const token = user.generateToken();
//   res.status(201).json({ success: true, message: "User registered successfully", token });
// });

// // ------------------ LOGIN ------------------
// export const login = asycHandler(async (req, res, next) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return next(new ErrorHandler("Please provide all required fields", 400));
//   }

//   const user = await User.findOne({ email, role }).select("+password");
//   if (!user) return next(new ErrorHandler("Invalid email, password or role", 401));

//   const isPasswordMatched = await user.comparePassword(password);
//   if (!isPasswordMatched) return next(new ErrorHandler("Invalid email, password or role", 401));

//   const token = user.generateToken();
//   res.status(200).json({ success: true, message: "Logged in successfully", token });
// });

// // ------------------ LOGOUT ------------------
// export const logout = asycHandler(async (req, res, next) => {
//   res
//     .status(200)
//     .cookie("token", "", { expires: new Date(Date.now()), httpOnly: true })
//     .json({ success: true, message: "Logged out successfully" });
// });

// // ------------------ GET USER ------------------
// export const getUser = asycHandler(async (req, res, next) => {
//   const user = req.user;
//   res.status(200).json({ success: true, user });
// });

// // ------------------ FORGET PASSWORD (SEND OTP) ------------------
// export const forgetPasswordOTP = asycHandler(async (req, res, next) => {
//   const { email } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return next(new ErrorHandler("User not found", 404));

//   // Generate 6-digit OTP
//   const otp = Math.floor(100000 + Math.random() * 900000);

//   user.resetOTP = otp;
//   user.resetOTPExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
//   await user.save({ validateBeforeSave: false });

//   // Send OTP via email
//   await sendEmail({
//     to: user.email,
//     subject: "ERP System Password Reset OTP",
//     message: `Your OTP is ${otp}. It will expire in 15 minutes.`,
//   });

//   res.status(200).json({ success: true, message: `OTP sent to ${user.email}` });
// });

// // ------------------ RESET PASSWORD USING OTP ------------------
// export const resetPasswordWithOTP = asycHandler(async (req, res, next) => {
//   const { email, otp, password, confirmPassword } = req.body;

//   if (!email || !otp || !password || !confirmPassword)
//     return next(new ErrorHandler("All fields are required", 400));

//   const user = await User.findOne({
//     email,
//     resetOTP: otp,
//     resetOTPExpire: { $gt: Date.now() },
//   });

//   if (!user) return next(new ErrorHandler("Invalid or expired OTP", 400));
//   if (password !== confirmPassword) return next(new ErrorHandler("Password and confirm password do not match", 400));

//   // Update password & clear OTP
//   user.password = password;
//   user.resetOTP = undefined;
//   user.resetOTPExpire = undefined;
//   await user.save();

//   // Auto-login: return JWT
//   const token = user.generateToken();

//   res.status(200).json({ success: true, message: "Password reset successful", token });
// });






















// import { asycHandler } from "../middlewares/asyncHandler.js";
// import ErrorHandler from "../middlewares/error.js";
// import { User } from "../models/User.js";
// import { sendEmail } from "../services/emailService.js";
// import jwt from "jsonwebtoken";

// // ------------------ REGISTER ------------------
// export const registerUser = asycHandler(async (req, res, next) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password || !role) {
//     return next(new ErrorHandler("Please provide all required fields", 400));
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) return next(new ErrorHandler("User already exists", 400));

//   const user = await User.create({ name, email, password, role });

//   // Send JWT
//   const token = user.generateToken();
//   res.status(201).json({ success: true, message: "User registered successfully", token });
// });

// // ------------------ LOGIN ------------------
// export const login = asycHandler(async (req, res, next) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return next(new ErrorHandler("Please provide all required fields", 400));
//   }

//   const user = await User.findOne({ email, role }).select("+password");
//   if (!user) return next(new ErrorHandler("Invalid email, password or role", 401));

//   const isPasswordMatched = await user.comparePassword(password);
//   if (!isPasswordMatched) return next(new ErrorHandler("Invalid email, password or role", 401));

//   const token = user.generateToken();
//   res.status(200).json({ success: true, message: "Logged in successfully", token });
// });

// // ------------------ LOGOUT ------------------
// // export const logout = asycHandler(async (req, res, next) => {
// //   res
// //     .status(200)
// //     .cookie("token", "", { expires: new Date(Date.now()), httpOnly: true })
// //     .json({ success: true, message: "Logged out successfully" });
// // });




// // ------------------ LOGOUT ------------------
// export const logout = asycHandler(async (req, res, next) => {
//   res
//     .status(200)
//     .cookie("token", "", {
//       expires: new Date(Date.now()), // expire immediately
//       httpOnly: true,
//       sameSite: "strict",
//       secure: process.env.NODE_ENV === "production", // secure in production
//     })
//     .json({ success: true, message: "Logged out successfully" });
// });

// // ------------------ GET USER ------------------




// // ------------------ GET USER ------------------
// export const getUser = asycHandler(async (req, res, next) => {
//   const user = req.user;
//   res.status(200).json({ success: true, user });
// });

// // ------------------ FORGET PASSWORD (SEND OTP) ------------------
// export const forgetPasswordOTP = asycHandler(async (req, res, next) => {
//   const { email } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return next(new ErrorHandler("User not found", 404));

//   // Generate 6-digit OTP
//   const otp = Math.floor(100000 + Math.random() * 900000);

//   // Save OTP and expiry
//   user.resetOTP = otp;
//   user.resetOTPExpire = Date.now() + 15 * 60 * 1000; // 15 minutes
//   await user.save({ validateBeforeSave: false });

//   console.log(`OTP for ${user.email}: ${otp}`); // ✅ Debug: log OTP

//   // Send OTP via email
//   await sendEmail({
//     to: user.email,
//     subject: "ERP System Password Reset OTP",
//     message: `Your OTP is ${otp}. It will expire in 15 minutes.`,
//   });

//   res.status(200).json({ success: true, message: `OTP sent to ${user.email}` });
// });

// // ------------------ RESET PASSWORD USING OTP ------------------
// export const resetPasswordWithOTP = asycHandler(async (req, res, next) => {
//   const { email, otp, password, confirmPassword } = req.body;

//   if (!email || !otp || !password || !confirmPassword)
//     return next(new ErrorHandler("All fields are required", 400));

//   // Convert OTP to number to match DB
//   const user = await User.findOne({
//     email,
//     resetOTP: Number(otp),
//     resetOTPExpire: { $gt: Date.now() },
//   });

//   if (!user) {
//     console.log("OTP reset failed:", { email, otp });
//     const dbUser = await User.findOne({ email });
//     console.log("User in DB:", dbUser);
//     return next(new ErrorHandler("Invalid or expired OTP", 400));
//   }

//   if (password !== confirmPassword)
//     return next(new ErrorHandler("Password and confirm password do not match", 400));

//   // Update password & clear OTP fields
//   user.password = password;
//   user.resetOTP = undefined;
//   user.resetOTPExpire = undefined;
//   await user.save();

//   // Auto-login: return JWT
//   const token = user.generateToken();

//   res.status(200).json({ success: true, message: "Password reset successful", token });
// });
