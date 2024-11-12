import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface HttpClient {
  normal: AxiosInstance;
  motion: AxiosInstance;
}

const normalInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

const motionInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

const delay = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const applyInterceptors = (instance: AxiosInstance, delayTime: number = 0) => {

  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      if (delayTime > 0) {
        await delay(delayTime); 
      }
      return response;
    },
    (error) => Promise.reject(error)
  );
};

applyInterceptors(normalInstance);
applyInterceptors(motionInstance, 200);

const httpClient: HttpClient = {
  normal: normalInstance,
  motion: motionInstance,
};

export default httpClient;
