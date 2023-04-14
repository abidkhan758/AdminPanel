import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "../components/Registration";
import Sidebar from "../components/Sidebar";
import Components from "./Components";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import Tables from "./Tables";
import RegistrationForm from "../components/RegistrationForm";
import Login from "../components/Login";
import RegistrationLogin from "../components/RegistrationLogin/RegistrationLogin";

const AdminPanel = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/AdminPanel" element={<Sidebar />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="forms/HorizontalForm" element={<Forms />} />
          <Route path="tables" element={<Tables />} />
        </Route>
      </Routes>

      {/* <Sidebar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="/components" element={<Components />} />

          <Route path="/forms/HorizontalForm" element={<Forms />} />

          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Sidebar> */}
    </>
  );
};

export default AdminPanel;
