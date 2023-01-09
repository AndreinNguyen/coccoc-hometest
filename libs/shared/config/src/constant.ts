export const API_BASE_URL = process.env.NX_API_URL;
export const SUCCESS_CODE = "success";
export type LocalStorageItems = {
  accessToken: string;
  email: string;
  password: string;
  name: string;
};
export const LOCAL_STORAGE_ITEMS: LocalStorageItems = {
  accessToken: "access_token",
  email: "email",
  password: "password",
  name: "name",
};

export const setLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, String(value));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getItemLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
