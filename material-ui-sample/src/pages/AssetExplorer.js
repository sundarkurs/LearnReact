import React, { useState } from "react";
import AssetBreadcrumb from "../components/Assets/AssetBreadcrumb";
import PageSettings from "./Settings/PageSettings";
import Divider from "@material-ui/core/Divider";
import { useLocation, useParams } from "react-router";
import { folders } from "../common/Constants/MockData";

const AssetExplorer = (props) => {
  const params = useParams();

  const [breadcrumbItems, setBreadcrumbItems] = useState(folders);

  console.log(params.assetTypeCode);

  const onMenuClickHandler = () => {
    console.log(1);
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
