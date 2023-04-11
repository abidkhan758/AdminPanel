import React, { useState } from "react";

const TestLogin = () => {
  const [userRegistration, setUserRegistration] = useState({
    userName: "",

    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  console.log("userRegistration", userRegistration);

  const saveData = () => {
    localStorage.setItem("userInfo", JSON.stringify(userRegistration));
    
  };

  return (
    <div>
       
      <input
        type="text"
        value={userRegistration.userName}
        name="userName"
        onChange={onChangeHandler}
        placeholder="User Name"
      />
      <input
        type="password"
        value={userRegistration.password}
        onChange={onChangeHandler}
        name="password"
        placeholder="Password"
      />
      <button type="submit" onClick={saveData}>submit</button>
    
    </div>
  );
};

export default TestLogin;
