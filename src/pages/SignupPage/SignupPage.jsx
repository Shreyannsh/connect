import "./SignupPage.css";
import { ICONS } from "../../icons";
import { useState } from "react";

const SignupPage = () => {
  const [select, setSelect] = useState("signUp");

  const setSignIn = () => {
    setSelect("signIn");
  };

  const setSignOut = () => {
    setSelect("signUp");
  };

  return (
    <div>
      <div className="navbar">
        <div>{ICONS.logoWithoutLine}</div>
        <div className="options">
          <p>Home</p>
          <p>Offer</p>
          <p>Pricing</p>
          <p>Guides</p>
          <p>Contact</p>
        </div>
        <div className="buttons">
          <div
            onClick={() => setSignIn()}
            className={select === "signIn" ? "signClass" : "noSignClass"}
          >
            Sign In
          </div>
          <div
            onClick={() => setSignOut()}
            className={select === "signUp" ? "signClass" : "noSignClass"}
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
