import React from "react";
import useForm from "./useForm";
import FormValidation from "./FormValidation";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    FormValidation
  );

  return (
    <div className="form-content-right">
      <form className="form-quote" onSubmit={handleSubmit}>
        <h1>Get in touch for a quote!</h1>

        <div className="form-inputs-quote">
          <label htmlFor="username" className="form-label-quote">
            Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input-quote "
            placeholder="Enter your name"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}

          {/*if errors.username is true then we pass whatever there is on the opposite side of the &&*/}
        </div>
        <div className="form-inputs-quote">
          <label htmlFor="email" className="form-label-quote">
            E-mail
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input-quote "
            placeholder="Enter your email here "
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs-quote">
          <label htmlFor="email" className="form-label-quote">
            Requirements
          </label>
          <input
            id="query"
            type="text"
            name="query"
            className="form-input-quote "
            placeholder="Enter your requirements here "
            value={values.query}
            onChange={handleChange}
          />
          {errors.query && <p>{errors.query}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
