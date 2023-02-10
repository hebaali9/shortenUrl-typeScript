import React, { useState } from "react";
//import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { signup } from "../actions";
import { store } from "../store";
import styles from "./index.css";

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
      <form
        className="text-base mt-3 flex flex-col md:justify-center text-indigo-900 mb-4 mx-4 md:mx-auto p-4 md:w-96   font-sans rounded items-center md:items-start	bg-neutral-50"
        onSubmit={handelSignUpSubmit}
      >
        <div className="email">
          <label>
            Email
            <input
              className="w-full md:w-56 md:ml-3 md:mb-2 md:mt-2 h-10 px-2 rounded-md border border-solid border-red-600"
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

        <button type="submit" className="text-blue-400">
          Sign UP
        </button>
      </form>
    </div>
  );
}
export default SignUp;
