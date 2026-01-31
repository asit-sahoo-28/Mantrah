// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true, // VERY IMPORTANT (cookies)
// });

// // REGISTER
// export const registerUser = (data) =>
//   API.post("/register", data);

// // LOGIN
// export const loginUser = (data) =>
//   API.post("/login", data);

// // LOGOUT
// export const logoutUser = () =>
//   API.post("/logout");

// // FORGET PASSWORD
// export const forgetPassword = (email) =>
//   API.post("/password/forget", { email });

// // RESET PASSWORD
// export const resetPasswordWithOTP = (data) => {
//   /**
//    * data = {
//    *   email,
//    *   otp,
//    *   password,
//    *   confirmPassword
//    * }
//    */
//   return API.post("/password/reset", data);
// };
