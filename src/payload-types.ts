/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    assets: Asset;
    users: User;
    textPromotions: TextPromotion;
    imagePromotions: ImagePromotion;
  };
  globals: {};
}
export interface Asset {
  id: string;
  actionUrl?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface TextPromotion {
  id: string;
  show: boolean;
  service: 'Zabo' | 'OTL' | 'SPARCS' | 'Ara' | 'Taxi';
  mainText: string;
  subText: string;
  action: {
    actionUrl?: string;
    actionText: string;
  };
  style: {
    primary: boolean;
    overrideThemeColor?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface ImagePromotion {
  id: string;
  show: boolean;
  images: {
    image?: string | Asset;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
