// src/utils/ApiClient.ts
import axios from 'axios';

export class ApiClient {
  
  public static async get(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error}`);
    }
  }
}
