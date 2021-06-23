import React, { useContext, useState } from "react";
import AssetBreadcrumb from "../components/Assets/AssetBreadcrumb";
import PageSettings from "./Settings/PageSettings";
import Divider from "@material-ui/core/Divider";
import { useParams } from "react-router";
import AppContext from "../store/AppContext/app-context";

const AssetExplorer = (props) => {
  const appCtx = useContext(AppContext);
  const params = useParams();

  const [breadcrumbItems, setBreadcrumbItems] = useState(appCtx.folders);

  console.log(params.assetTypeCode);

  const onMenuClickHandler = () => {
    const updatedBreadcrumbItems = breadcrumbItems.filter(
      (item) => item.id < 2
    );
    setBreadcrumbItems(updatedBreadcrumbItems);
  };

  return (
    <PageSettings title="Asset Explorer">
      <AssetBreadcrumb
        menuItems={breadcrumbItems}
        onMenuClick={onMenuClickHandler}
      ></AssetBreadcrumb>
      <Divider></Divider>
      <p>Details goes here</p>
    </PageSettings>
  );
};

export default AssetExplorer;
