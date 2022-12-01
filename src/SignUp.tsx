import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { Sign_UP_Api } from "./Actions";
import { store } from "./Store";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  // "M" | "F" is used in multiple places, let's set a type for it
  const [gender, setGender] = useState<"M" | "F">("F");

  const navigate = useNavigate();

  // name should be clearer. navigate to shorten url form/page
  const navigateToInputurl = () => {
    navigate("/");
  };

  // change event type and change place of function call to `form` element instead of the button element
  function handelSignUpSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    store.dispatch(
      Sign_UP_Api({ email, password, fName, lName, gender }, navigateToInputurl)
    );

    // axios
    //   .post(`${baseurl}/signup`, {
    //     email: email,
    //     password: password,
    //     first_name: fName,
    //     last_name: lName,
    //     gender: gender,
    //   })
    //   .then((response) => {
    //     //store.dispatch({
    //     // type: "UPDATE_THE_TOKEN",
    //     //    payload: ""
    //     // }) please can i keep them
    //     const action = Update_Token_Action(response.data.token);
    //     store.dispatch(action);

    //     navigateToInputurl();
    //   })
    //   .catch((error) => console.error(error));
  }

  return (
    // class names should be small kebabcase
    <div className="Sign-up">
      <h2>Sign UP</h2>
      <form>
        <div className="email-div">
          {/* label elements should always wrap input elements */}
          <label>Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        {/* remove `-div` suffix */}
        <div className="password-div">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div className="f-name-div">
          <label>FirstName </label>
          <input
            type="text"
            value={fName}
            onChange={(e) => {
              setFName(e.target.value);
            }}
          ></input>
        </div>
        <div className="l-name-div">
          <label>LastName </label>

          <input
            type="text"
            value={lName}
            onChange={(e) => {
              setLName(e.target.value);
            }}
          ></input>
        </div>
        <p className="Gender">
          Gender
          <input
            className="Radio"
            type="radio"
            value="M"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value as "M" | "F");
            }}
          />
          Male
          <input
            className="Radio"
            type="radio"
            value="F"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value as "M" | "F");
            }}
          />
          Female
        </p>
        {/* ?? */}
        UrlListParams
        <button type="submit" onClick={handelSignUpSubmit}>
          Sign UP
        </button>
      </form>
    </div>
  );
}
export default SignUp;
