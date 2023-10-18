import {IProduct} from "../models/IProduct";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

const API = 'https://fakestoreapi.com'
const PRODUCTS = '/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getItems = (limit: number) => this.http.get<IProduct[]>(
    API + PRODUCTS,
    {
      params: new HttpParams({
        fromObject: {
          limit
        }
      })
    })

  createItem = (item: IProduct) => this.http.post<IProduct>(
    API + PRODUCTS,
    item
  )
}
