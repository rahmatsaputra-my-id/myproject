import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../../constants/key/storage_key';
import { BASE_URL } from '../../constants/url/base_url';

const baseConfig = {
  // baseURL: BASE_URL.RAHMAT_SAPUTRA,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'access-control-allow-origin': '*',
  // },
  baseURL: BASE_URL.CONTACT,
  headers: {
    'Accept': 'application/json',
    'content-type': 'application/json',
  },
  timeout: 10000,
};

const api = axios.create(baseConfig);

api.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);

  if (token) {
    const tokenParse = JSON.parse(token || '');
    config.headers.Authorization = 'Bearer ' + tokenParse;
  }

  return config;
});

api.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
