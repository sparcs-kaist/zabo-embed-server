import type { CollectionConfig } from "payload/types";
import { showField } from "../fields";

export const ImagePromotions: CollectionConfig = {
  slug: "imagePromotions",
  fields: [
    showField,
    {
      name: "images",
      type: "array",
      required: true,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "assets",
        },
      ],
    }
  ],
};

