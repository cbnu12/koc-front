import axios, { AxiosPromise } from "axios";

export const isAxiosError = axios.isAxiosError;

export const resultData = async <T = any>(
  promiseObject: AxiosPromise<T>
): Promise<T> => {
  try {
    const result = await promiseObject;
    return result.data;
  } catch (error) {
    throw error;
  }
};
