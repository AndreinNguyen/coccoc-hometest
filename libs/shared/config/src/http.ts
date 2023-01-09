import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { LOCAL_STORAGE_ITEMS } from "./constant";
import qs from "qs";

export const client = (() => {
  return axios.create({
    baseURL: "/api",
  });
})();

client.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem(
        LOCAL_STORAGE_ITEMS.accessToken
      )}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.request.use((request) => {
  request.data = qs.stringify(request.data);
  return request;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const requestInstance = async <T>(options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse<T>) => {
    return response;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response?.data.errors);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default requestInstance;
