// import { createContext, useContext, useState } from "react";
// import { loginUser, logoutUser } from "../api/auth.api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);

//   const login = async (data) => {
//     const res = await loginUser(data);
//     if (res.data.success) setIsAuth(true);
//     return res.data;
//   };

//   const logout = async () => {
//     await logoutUser();
//     setIsAuth(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);









// import { createContext, useContext, useState } from "react";
// import { loginUser, logoutUser } from "../api/auth.api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);

//   const login = async (data) => {
//     const res = await loginUser(data);
//     setIsAuth(true);
//     return res.data;
//   };

//   const logout = async () => {
//     await logoutUser();
//     setIsAuth(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


















// import { createContext, useContext, useEffect, useState } from "react";
// import { loginUser, logoutUser } from "../api/auth.api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);

//   // 🔁 restore auth on refresh
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuth(true);
//     }
//   }, []);

//   const login = async (data) => {
//     const res = await loginUser(data);

//     // ✅ persist auth
//     localStorage.setItem("token", res.data.token);

//     setIsAuth(true); // 🔥 triggers Navbar re-render
//     return res.data;
//   };

//   const logout = async () => {
//     await logoutUser();

//     localStorage.removeItem("token");
//     setIsAuth(false); // 🔥 triggers Navbar re-render
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);






// import { createContext, useContext, useEffect, useState } from "react";
// import { loginUser, logoutUser } from "../api/auth.api";
// import { toast } from "react-toastify";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setIsAuth(true);
//   }, []);

//   const login = async (data) => {
//     try {
//       const res = await loginUser(data);
//       localStorage.setItem("token", res.data.token);
//       setIsAuth(true);
//       toast.success("Login successful 🎉");
//       return res.data;
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//       throw error;
//     }
//   };

//   const logout = async () => {
//     await logoutUser();
//     localStorage.removeItem("token");
//     setIsAuth(false);
//     toast.success("Logged out successfully");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);








// import { createContext, useContext, useState } from "react";
// import { loginUser, logoutUser } from "../api/auth.api";
// import toast from "react-hot-toast";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(
//     !!localStorage.getItem("token") // restore auth
//   );

//   const login = async (data) => {
//     try {
//       const res = await loginUser(data);

//       // ✅ store token
//       localStorage.setItem("token", res.data.token);

//       setIsAuth(true);
//       toast.success("Logged in successfully");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//       throw err;
//     }
//   };

//   const logout = async () => {
//     try {
//       await logoutUser(); // clears cookie
//     } catch (err) {
//       // backend optional
//     }

//     // ✅ REMOVE TOKEN FROM BROWSER
//     localStorage.removeItem("token");

//     setIsAuth(false);
//     toast.success("Logged out successfully");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
