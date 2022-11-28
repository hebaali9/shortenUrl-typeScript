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
  const [gender, setGender] = useState<"M" | "F">("F");

  const navigate = useNavigate();
  const navigateToInputurl = () => {
    navigate("/");
  };

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
    <div className="Sign-up">
      <h2>Sign UP</h2>
      <form>
        <div className="email-div">
          <label>Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
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
        UrlListParams
        <button type="submit" onClick={handelSignUpSubmit}>
          Sign UP
        </button>
      </form>
    </div>
  );
}
export default SignUp;
