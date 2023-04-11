import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Sidebar from "../components/Sidebar";
import Components from "./Components";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import Tables from "./Tables";

const AdminPanel = () => {
  const [dataFromChild, setDataFromChild] = useState([]);

  function parent(data) {
    setDataFromChild(data);
    // console.log("data", data)
    console.log("dataFromChild", dataFromChild);
    localStorage.setItem("dataToLocal", JSON.stringify(data));
  }
  const dataFromLocal = JSON.parse(localStorage.getItem("dataToLocal"));

  return (
    <>
     
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/components" element={<Components />} />
              <Route path="/forms/HorizontalForm" element={<Forms />} />
              <Route path="/tables" element={<Tables />} />
            </Routes>
          </Sidebar>
        </Router>
 
    </>
  );
};

export default AdminPanel;
