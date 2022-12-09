export type Url = {
  id: string;
  full_url: string;
  short_url: string;
};

export type EditedUrl = string;

export type UrlListParams = {
  selectedUrl: Url | null;
  editedUrl: string;
  token: string;
};
