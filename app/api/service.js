import axios, { AxiosInstance } from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BASEURL;
export const BaseImageURL = process.env.NEXT_PUBLIC_BASEIMAGEURL;

export const createNonAuthAxiosInstance = (
  baseURLParam, // Renamed parameter to avoid shadowing
  contentType = "application/json"
) => {
  return axios.create({
    baseURL: baseURLParam,
    headers: {
      "Content-Type": contentType,
    },
  });
};

// Use the exported baseURL for the axios instance
export const nonAuthData = createNonAuthAxiosInstance(baseURL);
