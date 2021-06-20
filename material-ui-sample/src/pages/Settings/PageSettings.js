import { Fragment, useContext, useEffect } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import AuthContext from "../../store/AuthContext/auth-context";
import PropTypes from "prop-types";

const PageSettings = (props) => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    authCtx.onTitleChange(props.title);
  }, []);

  let rendering = <PageLayout>{props.children}</PageLayout>;
  if (props.title === "Dashboard") {
    rendering = <Fragment>{props.children}</Fragment>;
  }

  return rendering;
};

export default PageSettings;

PageSettings.propTypes = {
  title: PropTypes.string,
};
