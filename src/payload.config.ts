import { buildConfig } from "payload/config";
import path from "path";
import {
  Assets,
  Users,
  TextPromotions,
  ImagePromotions
} from "./collections";
import { getRandomPromotion } from "./handlers/promotions";

export default buildConfig({
  serverURL: "http://localhost:3000",
  cors: "*",
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, "styles/index.css"),
  },
  collections: [
    Assets,
    Users,
    TextPromotions,
    ImagePromotions
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  endpoints: [
    {
      path: "/random",
      method: "get",
      handler: getRandomPromotion,
    }
  ]
});
