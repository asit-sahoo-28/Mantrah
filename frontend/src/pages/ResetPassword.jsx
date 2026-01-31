// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { resetPassword } from "../api/auth.api";

// export default function ResetPassword() {
//   const { token } = useParams(); // ✅ actual token from URL
//   const [form, setForm] = useState({ password: "", confirmPassword: "" });
//   const [message, setMessage] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await resetPassword(token, form);
//       setMessage(res.data.message);
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Password reset failed");
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <h2>Reset Password</h2>
//       <input
//         type="password"
//         placeholder="New Password"
//         value={form.password}
//         onChange={e => setForm({ ...form, password: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={form.confirmPassword}
//         onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
//       />
//       <button type="submit">Reset</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// }










// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { resetPassword } from "../api/auth.api";

// export default function ResetPassword() {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ password: "", confirmPassword: "" });

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     await resetPassword(token, form);
//     navigate("/login"); // ✅ auto redirect
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={submitHandler} className="w-full max-w-sm bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Reset Password</h2>
//           <input name="otp" placeholder="OTP" className="input" onChange={handleChange} />
//         <input className="input" type="password" placeholder="New Password"
//           onChange={e => setForm({ ...form, password: e.target.value })} />

//         <input className="input" type="password" placeholder="Confirm Password"
//           onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />

//         <button className="btn-primary w-full">Reset</button>
//       </form>
//     </div>
//   );
// }







import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPasswordWithOTP } from "../api/auth.api";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await resetPasswordWithOTP(form);
      toast.success(res.data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        {["email", "otp", "password", "confirmPassword"].map((field, i) => (
          <input
            key={i}
            name={field}
            type={field.includes("password") ? "password" : "text"}
            placeholder={field.toUpperCase()}
            className="w-full mb-3 px-4 py-2 border rounded"
            onChange={handleChange}
            required
          />
        ))}

        <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
