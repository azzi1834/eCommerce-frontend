import React from "react";
import Profile from "./personalDetails";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default DashboardRoutes;
