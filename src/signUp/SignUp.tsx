import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { signup } from "../actions";
import { store } from "../store";

type Gender = "M" | "F";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [gender, setGender] = useState<Gender>("F");

  const navigate = useNavigate();

  const navigateToShortenUrlPage = () => {
    navigate("/");
  };

  function handelSignUpSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();

    store.dispatch(
      signup(
        { email, password, fName, lName, gender },
        navigateToShortenUrlPage
      )
    );
  }

  return (
    <div className="sign-up">
      <h2>Sign UP</h2>
      <form onSubmit={handelSignUpSubmit}>
        <div className="email">
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="password">
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="f-name">
          <label>
            FirstName
            <input
              type="text"
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="l-name">
          <label>
            LastName
            <input
              type="text"
              value={lName}
              onChange={(e) => {
                setLName(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <p className="Gender">
          Gender
          <input
            className="Radio"
            type="radio"
            value="M"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value as Gender);
            }}
          />
          Male
          <input
            className="Radio"
            type="radio"
            value="F"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value as Gender);
            }}
          />
          Female
        </p>
        {/* ?? */}
        UrlListParams
        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
}
export default SignUp;
