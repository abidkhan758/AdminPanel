import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { json } from "react-router-dom";
import Login from "./Login";
// import "./Login.css";

const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    userName: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration(() => {
      return { ...userRegistration, [name]: value };
    });
  };
  console.log("userRegistration", userRegistration);

  const saveData = (e) => {
    e.preventDefault();

    const { userName, email, date, password } = userRegistration;
    if (userName === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert(" Registration email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than five");
    } else {
      localStorage.setItem(
        "userInfo",
        JSON.stringify([...data, userRegistration])
      );
    }
  };

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log("userInfo", userInfo);
  const changeToLogin = () => {
    setToggleForm(true);
  };
  return (
    <>
      {!toggleForm ? (
        <Form>
          <h3>Login</h3>
          <Form.Group className="mb-3 " controlId="formBasicUserName">
            <Form.Control
              type="text"
              value={userRegistration.userName}
              name="userName"
              onChange={onChangeHandler}
              placeholder="User Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={userRegistration.email}
              onChange={onChangeHandler}
              name="email"
              placeholder="Enter email"
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicUserName">
            <Form.Control type="date" name="date" onChange={onChangeHandler} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={userRegistration.password}
              onChange={onChangeHandler}
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={saveData}>
            Submit
          </Button>
          <Form.Label>
            Already have an account?{" "}
            <Button onClick={changeToLogin}>Sign In</Button>
          </Form.Label>
        </Form>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Registration;
