// import bcrypt from "bcrypt"
// import mongoose from "mongoose"
// import jwt from "jsonwebtoken"
// import crypto from "crypto";




// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,"Name is required"],
//         trim:true,
//         maxLenagth:[50,"Name cannot  exceed 30 charecters"]
//     },
//     email: {
//   type: String,
//   required: [true, "Email is required"],
//   unique: true,
//   lowercase: true,
//   match: [
//     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//     "Please fill a valid email address"
//   ]
// },
// password:{
//     type:String,
//         required:[true,"Password is required"],
//         select:false,
//         minLenagth:[8,"Password must be at 8 charecters long"]

// },
// role:{
//     type:String,
//     default:"Student",
//     enum:["Student","Teacher","Admin"]
// },
// resetPasswordToken:String,
// resetPasswordExpire:Date,

// department:{
//     type:String,
//     trim:true,
//     default:null,
// },
// experties:{
//     type:[String],
    
//     default:[],
// },
// maxStudents:{
//     type:Number,
    
//     default:10,
//     min:[1,"Min Students must be atleast 1"]
// },
// assignedStudents:[
//     {
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//     },
// ],
// supervisor:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User",
//     default:null,
// },
// project:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"Project",
//     default:null,

// },

// },{timestamps:true,})

// // userSchema.pre("save",async function(next){
// //     if(!this.isModified("password")){
// //         next();
// //     }
// //     this.password=await bcrypt.hash(this.password,10);
// // })


// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) {
//     return;
//   }

//   this.password = await bcrypt.hash(this.password, 10);
// });


// userSchema.methods.generateToken=function(){
//     return jwt.sign({id:this._id},process.env.JWT_SECRETE,{
//         expiresIn:process.env.JWT_EXPIRE
//     })
// }

// userSchema.methods.comparePassword=async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

// userSchema.methods.getResetPasswordToken= function(){
//     const resetToken=crypto.randomBytes(20).toString("hex");

//     this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");
//     this.resetPasswordExpire=Date.now() + 15 * 60 * 1000;
//     return resetToken;
// }

// export const User=mongoose.model("User",userSchema)














// import bcrypt from "bcrypt";
// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Name is required"],
//     trim: true,
//     maxLength: [50, "Name cannot exceed 50 characters"]
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     unique: true,
//     lowercase: true,
//     match: [
//       /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//       "Please fill a valid email address"
//     ]
//   },
//   password: {
//     type: String,
//     required: [true, "Password is required"],
//     select: false,
//     minLength: [8, "Password must be at least 8 characters long"]
//   },
//   role: {
//     type: String,
//     default: "Student",
//     enum: ["Student", "Teacher", "Admin"]
//   },

//   // TOKEN METHOD (not used for OTP, optional)
//   resetPasswordToken: String,
//   resetPasswordExpire: Date,

//   // OTP METHOD
//   resetOTP: Number,
//   resetOTPExpire: Date,

//   department: {
//     type: String,
//     trim: true,
//     default: null,
//   },
//   experties: {
//     type: [String],
//     default: [],
//   },
//   maxStudents: {
//     type: Number,
//     default: 10,
//     min: [1, "Min Students must be at least 1"]
//   },
//   assignedStudents: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   supervisor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     default: null,
//   },
//   project: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Project",
//     default: null,
//   },
// }, { timestamps: true });

// // Hash password before saving
// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) return;
//   this.password = await bcrypt.hash(this.password, 10);
// });

// // Generate JWT
// userSchema.methods.generateToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRETE, {
//     expiresIn: process.env.JWT_EXPIRE
//   });
// };

// // Compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// export const User = mongoose.model("User", userSchema);
