import React, { useEffect, useState } from "react";
//import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { signup } from "../actions";
import { store } from "../store";
import styles from "./index.css";
import { mockSignUpAPI } from "../mockSignUpAPI";

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
  // useEffect(() => {
  //   mockSignUpAPI().then((RegistrationParams) => {
  //     console.log(RegistrationParams);
  //     navigateToShortenUrlPage;
  //   });
  // }, []);

  // const navigateToShortenUrlPage = () => {
  //   navigate("/");
  // };
  //console.log(navigateToShortenUrlPage);

  function handelSignUpSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    mockSignUpAPI().then((RegistrationParams) => {
      console.log(RegistrationParams);
      navigate("/");
    });

    store.dispatch(
      signup(
        { email, password, fName, lName, gender },
        navigateToShortenUrlPage
      )
    );
  }

  return (
    <div className="sign-up">
      <form
        className="text-base  flex flex-col md:justify-center text-blue-700 mb-4  md:mx-auto p-4   font-sans rounded  border-solid shadow-md border-2	  items-center md:items-start md:w-96 mt-20 md:mt-48 bg-slate-50"
        onSubmit={handelSignUpSubmit}
      >
        <h2 className="text-blue-700 font-bold md:ml-36 md:text-xl text-lg mb-3 pb-5 text-center font-sans ">
          Sign UP
        </h2>
        <div className="email">
          <label className="w-full md:items-center flex flex-col md:flex-row mt-1">
            Email
            <input
              className="w-full md:w-56 md:ml-12 md:mb-2 md:mt-2 h-10 px-2 rounded-md border border-solid border-blue-700"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="password">
          <label className="w-full md:items-center flex flex-col md:flex-row mt-1">
            Password
            <input
              className="w-full md:w-56 md:ml-4 md:mb-2 md:mt-2 h-10 px-2 rounded-md border border-solid border-blue-700"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="f-name">
          <label className="w-full md:items-center flex flex-col md:flex-row mt-1">
            FirstName
            <input
              className="w-full md:w-56 md:ml-3 md:mb-2 md:mt-2 h-10 px-2 rounded-md border border-solid border-blue-700"
              type="text"
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <div className="l-name">
          <label className="w-full md:items-center flex flex-col md:flex-row mt-1">
            LastName
            <input
              className="w-full md:w-56 md:ml-3 md:mb-2 md:mt-2 h-10 px-2 rounded-md border border-solid border-blue-700"
              type="text"
              value={lName}
              onChange={(e) => {
                setLName(e.target.value);
              }}
            ></input>
          </label>
        </div>
        <p className="Gender md: mt-5 mb-3  ">
          Gender
          <input
            className="Radio ml-4  md:ml-14  mr-1 "
            type="radio"
            value="M"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value as Gender);
            }}
          />
          Male
          <input
            className="Radio ml-4  md:ml-8 mr-1  "
            type="radio"
            value="F"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value as Gender);
            }}
          />
          Female
        </p>

        <button
          type="submit"
          className="text-white bg-blue-700 border-solid w-full h-10 rounded-md  "
        >
          Sign UP
        </button>
      </form>
    </div>
  );
}
export default SignUp;
