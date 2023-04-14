import React, { useState } from "react";
import Login from "../Login";
import Registration from "../Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RegistrationLogin = () => {
  const [toggle, setToggle] = useState(false);

  function toggleForm(currentForm) {
    setToggle(currentForm);
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  );

  // !toggle ? (
  //   <Login toggleForm={toggleForm} />
  // ) : (
  //   <Registration toggleForm={toggleForm} />
  // );
};

export default RegistrationLogin;
