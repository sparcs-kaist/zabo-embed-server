import { CollectionConfig } from "payload/types";
import { Strategy as SamlStrategy } from "@node-saml/passport-saml";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  //   {
  //   strategies: [
  //     {
  //       name: "google",
  //       strategy: new SamlStrategy({
  //           path: "/login/callback",
  //           entryPoint: "https://accounts.google.com/o/saml2/idp?idpid=C02zhq3oe",
  //           issuer: "sparcs-kaist",
  //           cert: "fake cert",
  //         },
  //         () => {},
  //         () => {},
  //       )
  //     }
  //   ]
  // },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

