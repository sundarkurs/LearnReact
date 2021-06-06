import useInput from "../hooks/use-input";
import useInputReduced from "../hooks/use-input-reduced";
import "./BasicForm.css";

const BasicFormUsingCustomHook = (props) => {
  const {
    value: firstName,
    error: firstNameError,
    onChange: firstNameChangeHandler,
    onBlur: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInputReduced((val) => val.trim() !== "");

  const {
    value: lastName,
    error: lastNameError,
    onChange: lastNameChangeHandler,
    onBlur: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInputReduced((val) => val.trim() !== "");

  const {
    value: email,
    error: emailError,
    onChange: emailChangeHandler,
    onBlur: emailBlurHandler,
    reset: emailReset,
  } = useInputReduced((val) => val.includes("@"));

  const handleInputChange = (event) => {
    if (event.target.id == "firstName") {
      firstNameChangeHandler(event.target.value);
    } else if (event.target.id == "lastName") {
      lastNameChangeHandler(event.target.value);
    } else if (event.target.id == "email") {
      emailChangeHandler(event.target.value);
    }
  };

  const handleInputBlur = (event) => {
    if (event.target.id == "firstName") {
      firstNameBlurHandler();
    } else if (event.target.id == "lastName") {
      lastNameBlurHandler();
    } else if (event.target.id == "email") {
      emailBlurHandler();
    }
  };

  const formValid = firstName !== "" && lastName !== "" && email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValid) {
      console.log("FORM SUBMITTED");
      firstNameReset();
      lastNameReset();
      emailReset();
    } else {
      console.log("FORM NOT VALID");
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
            onBlur={handleInputBlur}
          />
          {firstNameError && (
            <p className="error-style">Enter valid first name.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            className={lastNameError ? "invalid" : ""}
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {lastNameError && (
            <p className="error-style">Enter valid last name.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          className={emailError ? "invalid" : ""}
          type="text"
          id="email"
          value={email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {emailError && <p className="error-style">Enter valid email.</p>}
      </div>
      <div className="form-actions">
        <button className={!formValid ? "disabled" : ""} disabled={!formValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicFormUsingCustomHook;
