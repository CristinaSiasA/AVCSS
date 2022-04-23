import React from "react";
import FormSignup from "./FormSignup";
import { useState } from "react";
import FormSuccess from "./FormSuccess";
import renewImg from "../../assets/images/renew.avif";

import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  const buttonReturn = () => {
    setIsSubmitted(false);
  };
  return (
    <>
      <div className="form-container">
        <button onClick={buttonReturn} className="close-btn">
          x
        </button>
        <div className="form-content-left">
          <img src={renewImg} alt="renewables" className="form-img" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
