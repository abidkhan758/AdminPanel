import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, json } from "react-router-dom";
import Login from "./Login";
// import "./Login.css";
import axios from "axios";
import "./Registration.css";
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas";

import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  mobileNumber: "",
  password: "",
  confirmPassword: "",
};

const Registration = (props) => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log("value", values);
        localStorage.setItem("userInfo", JSON.stringify([values]));

        if (userInfo) {
          navigate("/");
        }
      },
    });
  console.log("errors", errors);
  console.log("value", values);

  const changeForm = (e) => {
    e.preventDefault();
    props.toggleForm(false);
  };

  const [userRegistration, setUserRegistration] = useState({
    title: "",
    body: "",
  });

  const [userData, setData] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration(() => {
      return { ...userRegistration, [name]: value };
    });
  };
  // console.log("userRegistration", userRegistration);

  const saveData = (e) => {
    e.preventDefault();

    const { title, body } = userRegistration;
    if (title === "") {
      alert("Name field is required");
    } else if (body === "") {
      alert(" Registration email field is required");
    }
    // } else if (!email.includes("@")) {
    //   alert("Please enter valid email address");
    // } else if (password === "") {
    //   alert("password field is required");
    // } else if (password.length < 5) {
    //   alert("password length should be greater than five");
    // }
    else {
      var data = JSON.stringify(userRegistration);

      var config = {
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

      localStorage.setItem(
        "userInfo",
        JSON.stringify([...userData, userRegistration])
      );

      setUserRegistration({
        title: "",
        body: "",
      });
    }
  };
  // console.log(userRegistration);
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log("userInfo", userInfo);

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              autoComplete="off"
              className="form-control"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name ? (
              <p className="errorStyle">*{errors.name}</p>
            ) : null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="form-control"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email ? (
              <p className="errorStyle">*{errors.email}</p>
            ) : null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              autoComplete="off"
              name="mobileNumber"
              id="mobileNumber"
              className="form-control"
              value={values.mobileNumber}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.mobileNumber && touched.mobileNumber ? (
              <p className="errorStyle">*{errors.mobileNumber}</p>
            ) : null}
          </div>{" "}
          <div className="form-group mb-2">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p className="errorStyle">*{errors.password}</p>
            ) : null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              autoComplete="off"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="errorStyle">*{errors.confirmPassword}</p>
            ) : null}
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Submit
          </button>
        </form>
        <p>
          <span>
            <NavLink to="/">Login</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
  {
    /* <div className="container ">
        <div className="row">
          <div className="col-sm-4 offset-sm-4 py-5">
            <form>
              <div class="form-group">
                <h1>Registration</h1>
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  onChange={onChangeHandler}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={userRegistration.title}
                  name="title"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Last Name</label>
                <input
                  type="text"
                  onChange={onChangeHandler}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="body"
                  value={userRegistration.body}
                  name="body"
                />
              </div>
              <br />
              <button onClick={saveData} class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div> */
  }
};

export default Registration;
