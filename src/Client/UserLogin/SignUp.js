

import React, { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { footContext } from "../../Context";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setUser } from "../../Redux/UserSlice";
import axios from "axios";

const SignUpForm = () => {

  const dispatch=useDispatch()
  const { record, setRecord } = useContext(footContext);
  const navigte = new useNavigate();
  const [errors, setErrors] = useState({});
  //valuecatiching

  // useEffect(() => {
  //   console.log(record);
  // }, [record]);

 
  useEffect(() => { 
    setRecord({
      fname: "",
      email: "",
      pass: "",
      rePass: "",
    });
  },[]);

 
  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    
  };

  // validation

  const findErrors = () => {
    const { fname, email, pass, rePass } = record;
    const newErrors = {};

    if (!fname || fname === "") {
      newErrors.fname = "First name is required";
    } else if (fname.length > 30) {
      newErrors.fname = "Content is too long";
    }

    if (!email || email === "") {
      newErrors.email = "Email is required";
    }

    if (!pass || pass === "") {
      newErrors.pass = "Password field required!";
    } else if (pass.length < 8) {
      newErrors.pass = "Password must be at least 8 characters long";
    } else if (!/[a-z]/.test(pass)) {
      newErrors.pass = "Password must include at least one lowercase letter";
    } else if (!/[A-Z]/.test(pass)) {
      newErrors.pass = "Password must include at least one uppercase letter";
    } else if (!/[0-9]/.test(pass)) {
      newErrors.pass = "Password must include at least one digit";
    }
    if (pass !== rePass) {
      newErrors.rePass = "Passwords do not match";
    }
    return newErrors;
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    


    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    // } else {
    //   // Submit the form
    //   navigte("/login");
    //   console.log("Form submitted:", record);
    }else{
    try {
      // Send signup data to the server using Axios
      const response =axios.post(
        "http://localhost:3001/signup",
        record
      );
  
      console.log(response.data);
      // Redirect or perform any other actions upon successful signup
      navigte('/login');
    } catch (error) {
      console.log("Error during signup:", error.message);
      // Handle error cases, if needed
    }
     
      // Reset form fields and errors
      setRecord({ fname: "", email: "", pass: "", rePass: "" });
      setErrors({});
        }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <form style={{ marginTop: "120px" }} onSubmit={handlerSubmit}>
        <h3>Sign-up Here</h3>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="fname"
          value={record.fname}
          onChange={(e) => setValue(e.target.name, e.target.value)}
          isInvalid={!!errors.fname}
        />
        {errors.fname && <span className="error">{errors.fname}</span>}
        <label>E-mail</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={record.email}
          onChange={(e) => setValue(e.target.name, e.target.value)}
          isInvalid={!!errors.email}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="pass"
          value={record.pass}
          onChange={(e) => setValue(e.target.name, e.target.value)}
          isInvalid={!!errors.pass}
        />
        {errors.pass && <span className="error">{errors.pass}</span>}
        <label>Re-Password</label>
        <input
          type="password"
          placeholder="Re-enter Password"
          id="rePassword"
          name="rePass"
          value={record.rePass}
          onChange={(e) => setValue(e.target.name, e.target.value)}
          isInvalid={!!errors.rePass}
        />
        {errors.rePass && <span className="error">{errors.rePass}</span>}
        <button type="submit">Sign-Up</button>
        <br /> <br />
        <Link to={"/login"}>
          <h5 className="allready-act">Already have an account?</h5>
        </Link>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
      {/* <div className="shape"></div> */}
    </div>
  );
};

export default SignUpForm;

