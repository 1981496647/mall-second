import { TIMEOUT, BASE_URL } from "./config";
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => config,
  (err) => err
);
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err && err.response.status) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权");
          break;
        default:
          console.log("其他错误");
      }
    }
    return err;
  }
);

export default instance;
