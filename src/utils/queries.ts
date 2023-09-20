import type { Payload } from "payload";
import type { ImagePromotion, TextPromotion } from "zabo-embed";
import { services } from "../constants/services";

export const getImagePromotions = async (payload: Payload): Promise<ImagePromotion[]> => {
  const { docs } = await payload.find({
    collection: "imagePromotions",
    where: { show: { equals: true } }
  });

  return docs.map(doc => ({
    type: "image",
    items: doc.images
      .map(({ image }) => {
        if (typeof image === "string") return null;
        return {
          imageURL: image.url,
          actionURL: image.actionUrl,
        };
      }),
  }));
};

export const getTextPromotions = async (payload: Payload): Promise<TextPromotion[]> => {
  const { docs } = await payload.find({
    collection: "textPromotions",
    where: { show: { equals: true } }
  });

  return docs.map(doc => ({
    type: "text",
    mainText: doc.mainText,
    subText: doc.subText,
    serviceName: doc.service,
    actionURL: doc.action.actionUrl || services[doc.service].url,
    actionText: doc.action.actionText,
    style: {
      primary: doc.style.primary,
      themeColor: doc.style.overrideThemeColor ||
        services[doc.service].themeColor,
    }
  }));
};
