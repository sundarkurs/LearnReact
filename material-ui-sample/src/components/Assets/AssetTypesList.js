import { Fragment } from "react";
import AssetTypeCard from "./AssetTypeCard";
import Grid from "@material-ui/core/Grid";
import { useHistory, useLocation } from "react-router";

const assetTypes = [
  {
    id: 1,
    name: "Product Image",
    code: "ProductImage",
    description: "Product Image Description",
  },
  {
    id: 2,
    name: "Technical Service Document",
    code: "TechnicalServiceDocument",
    description: "Technical Service Document Description ",
  },
  { id: 3, name: "Brochure", code: "Brochure", description: " Description" },
  { id: 4, name: "IFU", code: "IFU", description: " Description" },
  {
    id: 5,
    name: "Datasheet",
    code: "Datasheet",
    description: " Description",
  },
  { id: 6, name: "FAQ", code: "FAQ", description: " Description" },
  { id: 7, name: "Image", code: "Image", description: " Description" },
  {
    id: 8,
    name: "Shop Image",
    code: "ShopImage",
    description: " Description",
  },
  { id: 9, name: "EC Doc", code: "ECDoc", description: " Description" },
  {
    id: 10,
    name: "Marketing Box",
    code: "MarketingBox",
    description: " Description",
  },
];

const AssetTypesList = () => {
  const history = useHistory();
  const location = useLocation();

  const onAssetTypeClickHandler = (assetType) => {
    history.push(location.pathname + "/" + assetType.code.toLowerCase());
  };

  const listItems = assetTypes.map((item) => {
    return (
      <Grid item key={item.id}>
        <AssetTypeCard
          assetType={item}
          onAssetTypeClick={onAssetTypeClickHandler}
        ></AssetTypeCard>
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
