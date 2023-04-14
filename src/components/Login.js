import { useState } from "react";
import "./Registration.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login(props) {
  const history = useNavigate();
  const changeForm = (e) => {
    e.preventDefault();
    props.toggleForm(true);
  };

  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });
  // const [sendToParent, setSendToParent] = useState([]);
  // const [toggleForm, setToggleForm] = useState(false);

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
    // console.log(getUserArr);

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

          history("/AdminPanel");
          // props.toggleForm(true);
        }
      }
    }
  };

  const userLogin = () => {
    const userData = localStorage.getItem("userInfo");
    console.log(userData);
  };
  const { email, password } = userRegistration;
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Login</h2>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="firstName" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="lastName" className="form-label">
              password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={onChangeHandler}
            ></input>
          </div>
          <button
            onClick={saveData}
            className="btn btn-success w-100 mt-2"
            type="button"
          >
            {" "}
            Submit
          </button>
        </form>
        <p>
          Don't have an account?
          <span>
            <NavLink to="/Registration">Register</NavLink>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
