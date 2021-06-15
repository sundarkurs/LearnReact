import { useState } from "react";

const useInput = (validationRule) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputError = inputTouched && !validationRule(inputValue);

  const reset = () => {
    setInputValue("");
    setInputTouched(false);
  };

  const handleChange = (value) => {
    setInputValue(value);
    setInputTouched(true);
  };

  const handleBlur = () => {
    setInputTouched(true);
  };

  return {
    value: inputValue,
    error: inputError,
    onChange: handleChange,
    onBlur: handleBlur,
    reset: reset,
  };
};

export default useInput;
