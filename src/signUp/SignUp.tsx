import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../actions";
import { store } from "../store";
import { Header } from "../header/Header";
import { Button } from "antd";

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

    store.dispatch(signup({ email }, navigateToShortenUrlPage));
  }

  return (
    <div className="sign-up">
      <Header />
      <form
        className="text-base px-3 mx-5 flex flex-col md:justify-center text-blue-700 mb-4  md:mx-auto p-4   font-sans rounded  border-solid shadow-md border-2	  items-center md:items-start md:w-96 mt-20 md:mt-48 bg-slate-50"
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

        <Button
          type="primary"
          className="text-white bg-blue-700 border-solid w-full h-10 rounded-md  "
          htmlType="submit"
        >
          Sign UP
        </Button>
      </form>
    </div>
  );
}
export default SignUp;
