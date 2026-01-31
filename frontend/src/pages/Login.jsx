// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "", role: "Student" });

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(form);
//       alert(res.message);
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <h2>Login</h2>
//       <input
//         placeholder="Email"
//         onChange={e => setForm({ ...form, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={e => setForm({ ...form, password: e.target.value })}
//       />
//       <select onChange={e => setForm({ ...form, role: e.target.value })}>
//         <option value="Student">Student</option>
//         <option value="Teacher">Teacher</option>
//         <option value="Admin">Admin</option>
//       </select>
//       <button>Login</button>
//     </form>
//   );
// }


import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast"; // ✅ import toast

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Student",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      toast.success("Login successful!"); // ✅ show success toast
      navigate("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed!"); // ✅ show error toast
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-sm bg-white p-6 rounded shadow" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          className="input"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          className="input"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
        </select>

        <button className="btn-primary w-full mt-3">Login</button>

        <div className="text-center mt-4 text-sm">
          <Link to="/password/forget" className="text-blue-600">Forgot password?</Link>
        </div>

        <div className="text-center mt-2 text-sm">
          No account? <Link to="/register" className="text-blue-600">Register</Link>
        </div>
      </form>
    </div>
  );
}
