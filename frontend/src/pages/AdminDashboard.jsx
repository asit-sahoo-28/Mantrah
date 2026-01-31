import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AppSidebar from "./AppSidebar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <AppSidebar/>

      {/* MAIN CONTENT AREA */}
      <main className="pt-16 md:ml-64 px-4 pb-20">
        <Outlet />
      </main>
    </>
  );
};

export default AdminDashboard;