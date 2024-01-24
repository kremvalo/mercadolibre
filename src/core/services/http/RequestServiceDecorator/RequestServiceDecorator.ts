import * as axiosNS from "axios";
import { handleErrorApiCalls } from "../HandleErrorApiCalls";
import { RequestService } from "../RequestService";
import { ResponseType } from "../RequestService/RequestService.types";

export class RequestServiceDecorator {
  private readonly instance: RequestService;
  constructor(baseUri: string) {
    this.instance = new RequestService(baseUri, undefined, handleErrorApiCalls);
  }

  get = async <T>(
    url: string,
    params?: Record<string, unknown>,
    headers?: axiosNS.AxiosHeaders,
    responseType?: ResponseType,
  ): Promise<T> => {
    return this.instance.get<T>(
      url,
      params,
      {
        // example: Authorization: `Bearer ${AuthServiceInstance.getInMemoryToken()}`,
        ...headers,
      } as unknown as axiosNS.AxiosHeaders,
      responseType,
    );
  };

  post = async <T>(url: string, data?: unknown): Promise<T> => {
    return this.instance.post(url, data, {
      // Authorization: `Bearer ${AuthServiceInstance.getInMemoryToken()}`,
    } as unknown as axiosNS.AxiosHeaders);
  };
  request = async <T>(url: string): Promise<T> => {
    return this.instance.get(url);
  };
}
