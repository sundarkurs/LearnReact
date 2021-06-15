import { useState } from "react";
import "./BasicForm.css";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const firstNameError = firstNameTouched && firstName === "";
  const lastNameError = lastNameTouched && lastName === "";
  const emailError = emailTouched && email === "";

  const handleInputChange = (event) => {
    if (event.target.id == "firstName") {
      setFirstNameTouched(true);
      setFirstName(event.target.value);
    } else if (event.target.id == "lastName") {
      setLastNameTouched(true);
      setLastName(event.target.value);
    } else if (event.target.id == "email") {
      setEmailTouched(true);
      setEmail(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName !== "" && lastName !== "" && email !== "") {
      console.log("FORM SUBMITTED");
      setFirstName("");
      setFirstNameTouched(false);
      setLastName("");
      setLastNameTouched(false);
      setEmail("");
      setEmailTouched(false);
    } else {
      console.log("FORM NOT VALID");
      setFirstNameTouched(true);
      setLastNameTouched(true);
      setEmailTouched(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            className={firstNameError ? "invalid" : ""}
            value={firstName}
            onChange={handleInputChange}
          />
          {firstNameError && (
            <p className="error-style">Enter valid first name.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            className={firstNameError ? "invalid" : ""}
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
          {lastNameError && (
            <p className="error-style">Enter valid last name.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          className={firstNameError ? "invalid" : ""}
          type="text"
          id="email"
          value={email}
          onChange={handleInputChange}
        />
        {emailError && <p className="error-style">Enter valid email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
