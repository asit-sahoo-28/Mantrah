// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
// import { AuthProvider } from "./context/AuthContext";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AppRoutes />
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }








import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        {/* <Navbar />        ✅ THIS WAS MISSING */}
        <AppRoutes />
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

