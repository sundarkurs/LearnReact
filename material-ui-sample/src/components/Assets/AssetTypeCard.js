import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import folderImage from "../../assets/folder-image.png";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import ImageTypeImage from "../../assets/asset-type-images/image-type.jpeg";
import ServiceDocumentImage from "../../assets/asset-type-images/service-document.jpg";
import UserManualImage from "../../assets/asset-type-images/users-manual.jpg";
import ProductImage from "../../assets/asset-type-images/product-image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function AssetTypeCard(props) {
  const classes = useStyles();

  const getAvatarText = (name) => {
    var matches = name.match(/\b(\w)/g);
    var acronym = matches.join("");
    return acronym;
  };

  return (
    <Card onClick={() => props.onAssetTypeClick(props.assetType)}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {getAvatarText(props.assetType.name)}
            </Avatar>
          }
          title={
            <Typography variant="h5" color="textSecondary" component="h2">
              {props.assetType.name}
            </Typography>
          }
          subheader={props.assetType.code}
        />

        <CardMedia
          component="img"
          alt={props.assetType.name}
          height="140"
          image={ServiceDocumentImage}
          title={props.assetType.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.assetType.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
