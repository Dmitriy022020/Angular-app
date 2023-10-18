import {Injectable} from '@angular/core';
import {ITodo} from "../../models/ITodo";
import {catchError, finalize, Observable, tap} from "rxjs";
import {CartService} from "../../services/cartService";
import {ErrorStore} from "../../commonComponents/error/errorStore";

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  todos: ITodo[] = []
  loading: boolean = false
  limit: number = 20

  constructor(private cartService: CartService, private errorStore: ErrorStore) {
  }

  getItems(): Observable<ITodo[]> {
    this.loading = true
    return this.cartService.getItems(this.limit).pipe(
      tap(todos => {
        this.todos = todos
      }),
      finalize(() => {
        this.loading = false
      }),
      catchError(this.errorStore.catchError))
  }

  onToggle = (id: number) => {
    const i = this.todos.findIndex(t => t.id === id)
    this.todos[i].completed = !this.todos[i].completed
    console.log(id)
  }

  removeItem = (id: number) => {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  clearStore = () => {
    this.todos = []
  }
}

