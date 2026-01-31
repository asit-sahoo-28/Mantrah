// import { useState } from "react";
// import { registerUser } from "../api/auth.api";

// export default function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "Student", // ✅ must match backend enum
//   });

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await registerUser(form);
//       alert(res.data.message);
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <h2>Register</h2>
//       <input
//         placeholder="Name"
//         onChange={e => setForm({ ...form, name: e.target.value })}
//       />
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
//       <button>Register</button>
//     </form>
//   );
// }






import { useState } from "react";
import { registerUser } from "../api/auth.api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      toast.success(res.data?.message || "Registered successfully");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-sm bg-white p-6 rounded shadow" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input className="input" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />

        <input className="input" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />

        <input className="input" type="password" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />

        <select className="input"
          onChange={e => setForm({ ...form, role: e.target.value })}>
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
        </select>

        <button className="btn-primary w-full mt-3">Create Account</button>

        <div className="text-center mt-4 text-sm">
          Already registered? <Link to="/login" className="text-blue-600">Login</Link>
        </div>
      </form>
    </div>
  );
}
