import { Fragment } from "react";
import AssetTypeCard from "./AssetTypeCard";
import Grid from "@material-ui/core/Grid";



const AssetTypesList = () => {
  const assetTypes = [
    { id: 1, name: "Product Image", description: "Product Image Description" },
    {
      id: 2,
      name: "Technical Service Document",
      description: "Technical Service Document Description Technical Service",
    },
    { id: 3, name: "Brochure", description: " Description" },
    { id: 4, name: "IFU", description: " Description" },
    { id: 5, name: "Datasheet", description: " Description" },
    { id: 6, name: "FAQ", description: " Description" },
    { id: 7, name: "Image", description: " Description" },
    { id: 8, name: "Shop Image", description: " Description" },
    { id: 9, name: "EC Doc", description: " Description" },
    { id: 10, name: "Marketing Box", description: " Description" },
  ];

  const listItems = assetTypes.map((item) => {
    return (
      <Grid item>
        <AssetTypeCard assetType={item}></AssetTypeCard>
      </Grid>
    );
  });

  return (
    <Fragment>
      <Grid container spacing={2}>
        {listItems}
      </Grid>
    </Fragment>
  );
};

export default AssetTypesList;
