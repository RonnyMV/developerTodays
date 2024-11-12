// src/types.d.ts
import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    delay?: boolean; // Custom delay property
  }
}
