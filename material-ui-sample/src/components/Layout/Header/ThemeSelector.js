import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext/auth-context";

const ThemeSelector = () => {
  const authCtx = useContext(AuthContext);

  const changeHandler = () => {
    authCtx.onToggleTheme();
  };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={authCtx.isDarkTheme}
          aria-label="Dark"
          onChange={changeHandler}
        />
      }
      label="Dark"
    />
  );
};

export default ThemeSelector;
