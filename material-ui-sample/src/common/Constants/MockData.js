export const assetTypes = [
  {
    id: 1,
    code: "PRODUCTIMAGE",
    name: "Product Image",
    description: "Product image description",
  },
  {
    id: 2,
    code: "SERVICEDOCUMENT",
    name: "Service Document",
    description: "Service document description ",
  },
  {
    id: 3,
    code: "USERMANUAL",
    name: "User Manual",
    description: "User manual description",
  },
  {
    id: 5,
    code: "IMAGE",
    name: "Image",
    description: "General images to be used for all purpose.",
  },
];

export const folders = [
  {
    id: 1,
    code: "PRODUCTIMAGE",
    name: "Product Image",
    parentId: null,
    assetType: 1,
    updatedOn: "",
    updatedBy: "",
  },
  {
    id: 2,
    code: "PRODUCTS",
    name: "Products",
    parentId: 1,
    assetType: 1,
    updatedOn: "",
    updatedBy: "",
  },
  {
    id: 3,
    code: "MOMENT",
    name: "Moment",
    parentId: 2,
    assetType: 1,
    updatedOn: "",
    updatedBy: "",
  },
  {
    id: 4,
    code: "EVOKE",
    name: "Evoke",
    parentId: 2,
    assetType: 1,
    updatedOn: "",
    updatedBy: "",
  },
];
