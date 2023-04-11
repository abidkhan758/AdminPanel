import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { json } from "react-router-dom";
import Registration from "./Registration";

function Login(props) {
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });
  const [sendToParent, setSendToParent] = useState([]);
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

    const getUserArr = localStorage.getItem("userInfo");
    console.log(getUserArr);

    const { email, password } = userRegistration;
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (email === "") {
      alert(" Login email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length should be greater than five");
    } else if (!userInfo) {
      alert("Please Register");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        console.log(userData);

        const userLogin = userData.filter((elem) => {
          return elem.email === email && elem.password === password;
        });
        console.log("userLogin", userLogin);

        if (userLogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("User Login Successfully");

          props.parentData(userLogin);
        }
      }
    }
  };
  console.log("userLogin", sendToParent);

  const changeToRegistration = () => {
    setToggleForm(true);
  };

  return (
    <>
      {!toggleForm ? (
        <Form>
          <h3>Sign In</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={onChangeHandler}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button variant="primary" onClick={saveData}>
            Login
          </Button>
          New User? Please Register
          <Button onClick={changeToRegistration}>Registration</Button>
          <br />
        </Form>
      ) : (
        <Registration />
      )}
    </>
  );
}

export default Login;
