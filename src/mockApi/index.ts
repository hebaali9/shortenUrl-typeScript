import {
  addUrl,
  deleteUrl,
  getUrlById,
  getUserUrls,
  saveUser,
  setCurrentUser,
  updateUrl,
} from "./storage";
import { Url, User } from "./types";
import { generateRandomString } from "./utils";

type SignupOrLoginResponse = { token: string };
type RegistrationParams = {
  email: string;
  // password: string;
  // fName: string;
  // lName: string;
  // gender: string;
};
type LoginParams = {
  email: string;
  password: string;
};

export const mockLoginApi = async (
  params: LoginParams
): Promise<SignupOrLoginResponse> => {
  const userId = params.email;
  const user: User = {
    id: userId,
    urls: [],
  };

  saveUser(user);
  setCurrentUser(params.email);

  return {
    token: "MOCK_TOCKEN",
  };
};

export const mockSignupApi = async (
  params: RegistrationParams
): Promise<SignupOrLoginResponse> => {
  setCurrentUser(params.email);

  return {
    token: "MOCK_TOCKEN",
  };
};

export const mockPostUrl = async (fullUrl: string) => {
  const urlSegment = generateRandomString();
  const url: Url = {
    id: urlSegment,
    fullUrl,
    shortUrl: window.location.origin + "/" + urlSegment,
  };

  addUrl(url);

  return url;
};

export const mockUpdateUrl = async (urlId: string, newUrl: string) => {
  const url = getUrlById(urlId);
  url.fullUrl = newUrl;

  updateUrl(url);
};

export const mockDeleteUrl = async (urlId: string) => {
  deleteUrl(urlId);
};

export const mockGetUrls = async () => {
  return getUserUrls();
};
