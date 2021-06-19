import { Fragment, useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/AuthContext/auth-context";
import { useHistory } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #545556;",
    width: "200px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const ProfileSettings = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const authCtx = useContext(AuthContext);

  const menuOpenHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuCloseHandler = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    authCtx.onLogout();
    history.push("/login");
  };

  const profileMenuItems = (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={menuCloseHandler}
    >
      <NavLink
        to="/profile"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
      </NavLink>

      <NavLink
        to="/my-settings"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Settings" />
        </StyledMenuItem>
      </NavLink>
      <Divider />
      <StyledMenuItem onClick={logoutHandler}>
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </StyledMenuItem>
    </StyledMenu>
  );

  return (
    <Fragment>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        onClick={menuOpenHandler}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {profileMenuItems}
    </Fragment>
  );
};

export default ProfileSettings;
