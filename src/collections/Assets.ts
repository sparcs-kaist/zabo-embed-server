import { CollectionConfig } from "payload/types";

export const Assets: CollectionConfig = {
  slug: "assets",
  upload: {
    staticURL: "/assets",
    staticDir: "../assets",
    imageSizes: []
  },
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "width", "height"],
  },
  fields: [
    {
      type: "text",
      name: "actionUrl",
      label: "Action URL",
    }
  ],
  access: {
    read: () => true,
  }
};
