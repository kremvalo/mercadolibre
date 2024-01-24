import { RequestServiceDecorator } from "../http/RequestServiceDecorator";
import { Item, Description } from "../types";

export class ServiceApi {
  reqsrcDecorator: RequestServiceDecorator;
  static _instance: ServiceApi;
  constructor() {
    this.reqsrcDecorator = new RequestServiceDecorator("https://api.mercadolibre.com");
  }

  static getInstance(): ServiceApi {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new ServiceApi();
    return this._instance;
  }

  public async getItems(query: string) {
    const resp = await this.reqsrcDecorator.get<any>(`/sites/MLA/search?q=${query}&limit=4`);
    
    const SerializedItems: Item[] = resp?.results?.map((item: any)=> {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        officialStoreName: item.seller.nickname ?? "",
        thumbnail: item.thumbnail,
      }
    })

    return SerializedItems;
  }

  public async getItem(itemId: string) {
    const resp = await this.reqsrcDecorator.get<any>(`/items/${itemId}`);

    const SerializedItem: Item = {
      id: resp.id,
      title: resp.title,
      condition: resp.condition,
      initialQuantity: resp.initial_quantity,
      price: resp.price,
      pictures: resp.pictures?.map((picture: any) => {
        return {
          id: picture.id,
          url: picture.url || "",
        }
      }),
    }

    return SerializedItem;
  }

  public async getItemDescription(itemId: string) {
    const resp = await this.reqsrcDecorator.get<any>(`/items/${itemId}/description`);

    const SerializedDescription: Description = {
      plainText: resp.plain_text
    }

    return SerializedDescription;
  }
}
