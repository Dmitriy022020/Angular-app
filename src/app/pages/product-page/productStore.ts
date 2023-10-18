import {Injectable} from "@angular/core";
import {catchError, delay, finalize, Observable, retry, tap} from "rxjs";
import {IProduct} from "../../models/IProduct";
import {ErrorStore} from "../../commonComponents/error/errorStore";
import {ProductService} from "../../services/productService";

@Injectable({
  providedIn: 'root'
})
export class ProductStore {
  limit: number = 5
  products: IProduct[] = []
  loading: boolean = false

  constructor(
    private productService: ProductService,
    private errorStore: ErrorStore
  ) {
  }

  getItems(): Observable<IProduct[]> {
    this.loading = true
    return this.productService.getItems(this.limit).pipe(
      delay(100),
      retry(2),
      tap(products => {
        this.products = products
      }),
      finalize(() => {
        this.loading = false
      }),
      catchError(this.errorStore.catchError))
  }

  createItem(product: IProduct): Observable<IProduct> {
    return this.productService.createItem(product).pipe(
      tap(product => {
        this.products.push(product)
      }),
      catchError(this.errorStore.catchError))
  }

  clearStore() {
    this.products = []
  }
}
