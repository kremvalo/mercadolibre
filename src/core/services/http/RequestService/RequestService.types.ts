import * as axiosNS from "axios";

export type ResponseType = "json" | "blob" | "arraybuffer";

export type ServerError = {
  message: string;
  error?: {
    errorCode?: number;
  };
};

export interface RequestParams {
  url: string;
  params?: unknown;
  headers?: axiosNS.AxiosRequestHeaders;
  responseType?: ResponseType;
  data?: unknown;
  withCredentials?: boolean;
  method: axiosNS.Method;
}
