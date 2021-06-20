import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";

import folderImage from "../../assets/folder-image.png";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 345,
    height: 250,
  },
});

export default function AssetTypeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.assetType.name}
          height="140"
          image={folderImage}
          title={props.assetType.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.assetType.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.assetType.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
