import axios from "axios";
import utils from "../utils/Utils";

axios.defaults.withCredentials = true;

const createConfig = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return config;
};

const createFileConfig = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return config;
};

export const get = async (url, data = null) => {
  data = { ...data, _locale: utils.getLSVariable("locale") };
  const response = await axios.get(url, data, createConfig());

  return response;
};

export const post = async (url, data = null, withCredentials) => {
  axios.defaults.withCredentials = withCredentials;
  data = { ...data, _locale: utils.getLSVariable("locale") };
  const response = await axios.post(url, data, createConfig());

  return response;
};


export const postFile = async (url, data = null) => {
  data.append("_locale", utils.getLSVariable("locale"));
  const response = await axios.post(url, data, createFileConfig());

  return response;
};
