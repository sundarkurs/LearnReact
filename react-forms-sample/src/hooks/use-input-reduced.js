import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: true };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return inputStateReducer;
};

const useInputReduced = (validationRule) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const inputError = inputState.isTouched && !validationRule(inputState.value);

  const handleChange = (value) => {
    dispatch({ type: "INPUT", value: value });
  };

  const handleBlur = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    error: inputError,
    onChange: handleChange,
    onBlur: handleBlur,
    reset: reset,
  };
};

export default useInputReduced;
