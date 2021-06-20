import React, { useState } from "react";
import AssetBreadcrumb from "../components/Assets/AssetBreadcrumb";
import PageSettings from "./Settings/PageSettings";
import Divider from "@material-ui/core/Divider";
import { useLocation } from "react-router";

const productImageFolders = [
  { id: 1, name: "Core", code: "Core", parent: null },
  { id: 2, name: "Web", code: "Web", parent: 1 },
  { id: 3, name: "Root", code: "Root", parent: 1 },
  { id: 4, name: "Inter", code: "Inter", parent: 2 },
];

const productImageAssets = [{ id: 1, name: "A1 Product", folder: 1 }];

const AssetExplorer = (props) => {
  const location = useLocation();
  debugger;

  const [breadcrumb, setBreadcrumb] = useState([]);


  let breadCrumbItems = [
    { order: 0, name: "Product Image", code: "ProductImage" },
    { order: 1, name: "Core", code: "Core" },
    { order: 2, name: "Web", code: "Web" },
    { order: 3, name: "Inter", code: "Inter" },
  ];

  const onMenuClickHandler = () => {
    console.log(1);
    breadCrumbItems = breadCrumbItems.filter((item) => item.order > 2);
  };

  return (
    <PageSettings title="Asset Explorer">
      <AssetBreadcrumb
        menuItems={breadCrumbItems}
        onMenuClick={onMenuClickHandler}
      ></AssetBreadcrumb>
      <Divider></Divider>
      <p>Details goes here</p>
    </PageSettings>
  );
};

export default AssetExplorer;
