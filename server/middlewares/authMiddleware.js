// import jwt from "jsonwebtoken"
// import  {asycHandler}  from "./asyncHandler.js"
// import ErrorHandler from "./error.js"
// import { User } from "../models/User.js"

// export const isAuthenticated=asycHandler(async(req,res,next)=>{
//     const {token}=req.cookies;
//     if(!token){
//         return next(new ErrorHandler("Please login to access this resource.",401));
//     }

//     const decoded=jwt.verify(token,process.env.JWT_SECRETE);
//     req.user=await User.findById(decoded.id).select("-resetPasswordToken -resetPasswordExpire")

//     if(!req.user){
//         return next(new ErrorHandler("User not found with this id.",404));
//     }
//     next();
// })












// import jwt from "jsonwebtoken";
// import { asycHandler } from "../middlewares/asyncHandler.js";
// import ErrorHandler from "./error.js";
// import { User } from "../models/User.js";

// export const isAuthenticated = asycHandler(async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return next(new ErrorHandler("Please login to access this resource.", 401));
//   }

//   // Verify JWT
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);

//   // Find user by ID
//   req.user = await User.findById(decoded.id).select(
//     "-resetPasswordToken -resetPasswordExpire"
//   );

//   if (!req.user) {
//     return next(new ErrorHandler("User not found with this id.", 404));
//   }

//   next();
// });
