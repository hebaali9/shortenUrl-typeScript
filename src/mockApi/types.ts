export type Url = {
  id: string;
  fullUrl: string;
  shortUrl: string;
};

export type User = {
  id: string;
  urls: Url[];
};
