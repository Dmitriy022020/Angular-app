import {IProduct} from "../models/IProduct";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ITodo} from "../models/ITodo";

const API = 'https://jsonplaceholder.typicode.com'
const PRODUCTS = '/todos'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getItems = (limit: number) => this.http.get<ITodo[]>(
    API + PRODUCTS,
    {
      params: new HttpParams({
        fromObject: {
          _limit: limit
        }
      })
    })

  createItem = (item: IProduct) => this.http.post<IProduct>(
    API + PRODUCTS,
    item
  )
}
