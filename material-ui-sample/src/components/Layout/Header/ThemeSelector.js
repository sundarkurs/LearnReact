import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const ThemeSelector = () => {
  const changeHandler = () => {};
  return (
    <FormControlLabel
      control={<Switch aria-label="Dark" onChange={changeHandler} />}
      label="Dark"
    />
  );
};

export default ThemeSelector;
