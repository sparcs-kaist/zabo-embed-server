import type { PayloadHandler } from "payload/config";
import { getImagePromotions, getTextPromotions } from "../utils/queries";

export const getRandomPromotion: PayloadHandler = async (req, res) => {
  const promotions = [
    ...await getTextPromotions(req.payload),
    ...await getImagePromotions(req.payload),
  ];

  const promotion = promotions.at(~~(Math.random() * promotions.length));

  if (!promotion) return res.send({});

  return res.send({ promotion });
};
