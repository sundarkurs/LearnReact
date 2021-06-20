import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import CollectionsIcon from "@material-ui/icons/Collections";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";

export const primaryMenuItems = (
  <div>
    <NavLink
      to="/dashboard"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>

    <NavLink
      to="/asset-types"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button>
        <ListItemIcon>
          <ArtTrackIcon />
        </ListItemIcon>
        <ListItemText primary="Asset types" />
      </ListItem>
    </NavLink>
    <NavLink to="/assets" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <CollectionsIcon />
        </ListItemIcon>
        <ListItemText primary="Assets" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryMenuItems = (
  <div>
    <ListSubheader inset>Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
