import axios, * as axiosNS from "axios";
import { isDefined } from "../../../utils/object";
import {
  RequestParams,
  ResponseType,
  ServerError,
} from "./RequestService.types";

export class RequestService {
  private instance!: axiosNS.AxiosInstance;

  constructor(
    baseUrl: string,
    onFulfilled?: (data: axiosNS.AxiosResponse) => void,
    onRejected?: (error: axiosNS.AxiosError<ServerError>) => void,
  ) {
    this.configureAxios(baseUrl, onFulfilled, onRejected);
    return this;
  }

  private configureAxios = (
    baseUrl: string,
    onFulfilled?: (data: axiosNS.AxiosResponse) => void,
    onRejected?: (error: axiosNS.AxiosError<ServerError>) => void,
  ): void => {
    const axiosRequestConfig: axiosNS.AxiosRequestConfig = {
      baseURL: baseUrl,
    };
    this.instance = axios.create(axiosRequestConfig);

    this.instance.interceptors.response.use(
      (success: axiosNS.AxiosResponse) => {
        if (isDefined(onFulfilled) && onFulfilled) {
          onFulfilled(success);
        }
        return success;
      },
      (
        error: axiosNS.AxiosError<ServerError>,
      ): Promise<axiosNS.AxiosError<ServerError>> => {
        if (isDefined(onRejected) && onRejected) {
          onRejected(error);
        }
        return Promise.reject(error);
      },
    );
  };

  async request<T>(options: RequestParams): Promise<T> {
    const {
      url,
      params,
      data,
      headers,
      withCredentials,
      responseType,
      method,
    } = options;

    const response = await this.instance.request<T>({
      url,
      method,
      params,
      data,
      headers,
      withCredentials,
      responseType,
    });

    return response.data;
  }

  async get<T>(
    url: string,
    params?: Record<string, unknown>,
    headers?: axiosNS.AxiosRequestHeaders,
    responseType?: ResponseType,
  ): Promise<T> {
    return await this.request({
      url,
      params,
      headers,
      responseType,
      method: "get",
    });
  }

  async post<T>(
    url: string,
    data?: unknown,
    headers?: axiosNS.AxiosRequestHeaders,
  ): Promise<T> {
    return await this.request({
      url,
      data,
      headers,
      withCredentials: true,
      method: "post",
    });
  }

  async put<T>(
    url: string,
    data?: unknown,
    headers?: axiosNS.AxiosRequestHeaders,
  ): Promise<T> {
    return await this.request({
      url,
      data,
      headers,
      withCredentials: true,
      method: "put",
    });
  }
}
