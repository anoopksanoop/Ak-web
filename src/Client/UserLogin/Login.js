import React, { useContext, useRef, useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { footContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/UserSlice";
import { selectUser } from "../../Redux/UserSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const nav = new useNavigate();
  const [errors, setErrors] = useState({});
  const data = useContext(footContext);
  const inputRef = useRef();

  const { record, setRecord, setLogin } = data;

  const findErrors = () => {
    const { email, pass } = record;
    const newErrors = {};

    // if (!email || email === "") {
    //   newErrors.email = "Email is required";
    // }else if (pass !==user.email) {
    //   newErrors.pass = "email is not matching";
    // }

    // if (!pass || pass === "") {
    //   newErrors.pass = "Password field required!";
    // } else if (pass !==user.pass) {
    //   newErrors.pass = "Password is not matching";
    // }

    // if (!email || email.trim() === "") {
    //   newErrors.email = "Email is required";
    // }

    // if (!pass || pass.trim() === "") {
    //   newErrors.pass = "Password field required!";
    // }
    return newErrors;
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
  
    const email = inputRef.current.email.value;
    const pass = inputRef.current.pass.value;
    const newErrors = findErrors();
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, pass }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }
  
        const userData = await response.json();
        const matchedUser = userData.user;
  
        if (matchedUser) {
          dispatch(setUser({ ...matchedUser, loggedIn: true }));
          nav("/");
          setLogin(true);
        }
      } catch (error) {
        console.log("Error during login:", error.message);
        // Handle error cases, if needed
      }
    }
  };
  
  return (
    <div className="background">
      <div className="shape"></div>
      <form ref={inputRef} onSubmit={handlerSubmit}>
        <h3>Login Here</h3>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="email"
          name="email"
          required
          defaultValue={record.email}
          isInvalid={!!errors.email}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="pass"
          required
          defaultValue={record.pass}
          isInvalid={!!errors.pass}
        />
        {errors.pass && <span className="error">{errors.pass}</span>}
        <button type="suubmit">Log In</button>
        <br /> <br />
        <Link to={"/signup"}>
          <h5 className="allready-act">Create new account</h5>
        </Link>
        <div className="social">
          {/* <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div> */}
        </div>
      </form>
      {/* <div className="shape"></div> */}
    </div>
  );
};

export default LoginForm;
