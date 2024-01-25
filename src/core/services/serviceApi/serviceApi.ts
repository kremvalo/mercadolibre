import { RequestServiceDecorator } from "../http/RequestServiceDecorator";

export class ServiceApi {
  reqsrcDecorator: RequestServiceDecorator;
  static _instance: ServiceApi;
  constructor() {
    this.reqsrcDecorator = new RequestServiceDecorator("localhost:3000/api/items");
  }

  static getInstance(): ServiceApi {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new ServiceApi();
    return this._instance;
  }

  public async getItems(query: string) {
    const resp = await this.reqsrcDecorator.get<any>(`?limit=4&q=${query}`);

    return resp.items;
  }

  public async getItem(itemId: string) {
    const resp = await this.reqsrcDecorator.get<any>(`${itemId}`);

    return resp.item;
  }
}
