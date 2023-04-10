import { Url, User } from "./types";

// User Apis
type Users = Record<string, User>;

const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")!) as Users;
};

const getCurrentUserId = () => {
  return localStorage.getItem("userId") as string;
};

const getCurrentUser = () => {
  return getUsers()[getCurrentUserId()];
};

const updateUserUrls = (urls: Url[]) => {
  const user = getCurrentUser();
  user.urls = urls;
  saveUser(user);
};

export const saveUser = (user: User) => {
  const users = getUsers();
  users[user.id] = user;
  localStorage.setItem("users", JSON.stringify(users));
};

export const setCurrentUser = (userId: string) => {
  localStorage.setItem("userId", userId);
  let users = getUsers();
  if (!users) {
    users = {};
  }
  users[userId] = {
    id: userId,
    urls: [],
  };
  localStorage.setItem("users", JSON.stringify(users));
};

// Url Apis

export const getUserUrls = () => {
  const { urls } = getCurrentUser();
  return urls;
};

export const getUrlById = (urlId: string) => {
  const { urls } = getCurrentUser();
  return urls.find(({ id }) => id === urlId)!;
};

export const addUrl = (url: Url) => {
  const user = getCurrentUser();
  const updatedUrls = user.urls.concat(url);
  updateUserUrls(updatedUrls);
};

export const updateUrl = (updatedUrl: Url) => {
  const { urls } = getCurrentUser();
  const newUrls = urls.map((url) => {
    if (url.id === updatedUrl.id) {
      return {
        id: url.id,
        shortUrl: url.shortUrl,
        fullUrl: updatedUrl.fullUrl,
      };
    }
    return url;
  });

  updateUserUrls(newUrls);
};

export const deleteUrl = (urlId: string) => {
  const user = getCurrentUser();
  const updatedUrls = user.urls.filter(({ id }) => id !== urlId);
  updateUserUrls(updatedUrls);
};

export const getUrlBySegment = (urlId: string) => {
  const users = getUsers();
  const userWithUrl = Object.values(users).filter(({ urls }) => {
    const url = urls.find((url) => url.id === urlId);
    return Boolean(url);
  }, null);

  if (userWithUrl.length) {
    const url = userWithUrl[0].urls.find(({ id }) => id === urlId)!;
    return url.fullUrl;
  }
};
