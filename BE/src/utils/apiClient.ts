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

  public static async post(url: string) {
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error}`);
    }
  }

  public static async delete(url: string) {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error}`);
    }
  }

  public static async update(url: string) {
    try {
      const response = await axios.update(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error}`);
    }
  }
}
