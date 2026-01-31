// import { useState } from "react";
// import { forgetPassword } from "../api/auth.api";

// export default function ForgetPassword() {
//   const [email, setEmail] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const res = await forgetPassword(email);
//     alert(res.data.message);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <h2>Forget Password</h2>
//       <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
//       <button>Send Reset Link</button>
//     </form>
//   );
// }













// import { useState } from "react";
// import { forgetPassword } from "../api/auth.api";
// import { useNavigate } from "react-router-dom";

// export default function ForgetPassword() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     await forgetPassword(email);
//     navigate("/login"); // ✅ auto redirect
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={submitHandler} className="w-full max-w-sm bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
//         <input className="input" placeholder="Email"
//           onChange={e => setEmail(e.target.value)} />
//         <button className="btn-primary w-full">Send OTP</button>
//       </form>
//     </div>
//   );
// }











import { useState } from "react";
import { forgetPassword } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await forgetPassword(email);
      toast.success(res.data.message);
      setTimeout(() => navigate("/password/reset"), 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full mb-4 px-4 py-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
}
