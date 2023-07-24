import React, { useState } from "react";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegistrationForm = ({ onSubmit, validateForm }) => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm(formData);

    if (validation.formValid) {
      onSubmit({ formData, validation });
      setFormData(initialFormData);
      setErrors(null);
    } else {
      setErrors(validation.errors);
    }
  };
  return (
    <form className="registrationForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Name</label>
      {errors && !errors.nameValid && (
        <p className="errors" style={{ fontSize: 10 }}>
          * Vardas turi būti netrumpesnis nei 5 simboliai
        </p>
      )}
      <div className="nameInput">
        <FontAwesomeIcon icon={faUser} style={{ paddingLeft: 10 }} />
        <input
          type="text"
          name="username"
          placeholder="Joy Shaheb"
          value={FormData.username}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="email">Email</label>
      {errors && !errors.emailValid && (
        <p className="errors" style={{ fontSize: 10 }}>
          * Suklydote įvesdami savo elektroninį paštą formatas: abc@gmail.com
        </p>
      )}
      <div className="emailInput">
        <FontAwesomeIcon icon={faEnvelope} style={{ paddingLeft: 10 }} />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@gmail.com"
          value={FormData.email}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="password">Password</label>
      {errors && !errors.passwordValid && (
        <p className="errors" style={{ fontSize: 10 }}>
          * Slaptažodis turi būti ne trumpesnis nei 6 simboliai
        </p>
      )}
      <div className="passwordInput">
        <FontAwesomeIcon icon={faLock} style={{ paddingLeft: 10 }} />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="●●●●●●●"
          value={FormData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
