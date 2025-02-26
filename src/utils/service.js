import axios from "axios";

// 创建 axios 实例
const service = axios.create({
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      return Promise.reject();
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
