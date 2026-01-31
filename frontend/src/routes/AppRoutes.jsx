import { Routes, Route,useLocation } from "react-router-dom";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import ForgetPassword from "../pages/ForgetPassword";
// import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Footer from "../components/Footer";
import LearnUs from "../components/LearnUs";
import Faq from "../pages/Faq";
import OnlineClasses from "../pages/OnlineClasses";
import OffineClass from "../pages/OffineClass";
import Exams from "../pages/Exams";
import WorkShop from "../pages/WorkShop";
import Contact from "../pages/Contact";


// export default function AppRoutes() {
//   return (
//     <>
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About/>}/>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/password/forget" element={<ForgetPassword />} />
//       <Route path="/password/reset" element={<ResetPassword />} />
//       <Route path="/faq" element={<Faq/>}/>
//       <Route path="/learning/online" element={<OnlineClasses/>}/>
//       <Route path="/learning/offline" element={<OffineClass/>}/>
//       <Route path="/learning/exams" element={<Exams/>}/>
//        <Route path="/learning/workshop" element={<WorkShop/>}/>
//        <Route path="/contact" element={<Contact/>}/>
//     </Routes>
//     <LearnUs/>
//     <Footer/>
//     </>
//   );
// }










import ScrollToTop from "../components/ScrollToTop"; // adjust path

import WhatsAppButton from "../components/WhatsAppButton";
import AddPhoto from "../components/AddPhoto";
import AddVideo from "../components/Addvideo";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AddEvent from "../components/AddEvent";
import ShowData from "../components/ShowData";
import PhotoGraph from "../components/PhotoGraph";
import Video from "../components/Video";
import Event from "../components/Event";

export default function AppRoutes() {
    const location = useLocation();

  const isAdminRoute =
     location.pathname.startsWith("/admin") || location.pathname.startsWith("/admin-dashboard") ;

  return (
    <>
       {!isAdminRoute && <Navbar />}
      <ScrollToTop />  {/* <-- Add this */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forget" element={<ForgetPassword />} />
        <Route path="/password/reset" element={<ResetPassword />} /> */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/learning/online" element={<OnlineClasses />} />
        <Route path="/learning/offline" element={<OffineClass />} />
        <Route path="/learning/exams" element={<Exams />} />
        <Route path="/learning/workshop" element={<WorkShop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/photos" element={<PhotoGraph/>}/>
        <Route path="/gallery/videos" element={<Video/>}/>
        <Route path="/gallery/Event" element={<Event/>}/>

        <Route path="/admin" element={<AdminLogin/>}/>
        {/* ===== ADMIN DASHBOARD ===== */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AddPhoto />} />
          <Route path="add-photo" element={<AddPhoto />} />
          <Route path="add-video" element={<AddVideo />} />
          <Route path="add-event" element={<AddEvent />} />
          <Route path="show-data" element={<ShowData />} />
         
        </Route>


      </Routes>
       {!isAdminRoute && <LearnUs />}
    {!isAdminRoute && <Footer />}
    {!isAdminRoute && <WhatsAppButton />}
    </>
  );
}
