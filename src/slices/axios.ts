import axios, { Canceler } from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const CancelToken = axios.CancelToken;
let cancel: Canceler;

axiosInstance.interceptors.request.use((config) => {
  if(config?.url && config?.url.includes('/search/person')){
    if (cancel) {
      cancel(); // cancel request
    }
  
    config.cancelToken =  new CancelToken(function executor(c)
      {
        cancel = c;
      })

    return config;
  }
  return config;
});

export default axiosInstance;
