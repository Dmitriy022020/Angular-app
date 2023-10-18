import {Injectable} from '@angular/core';
import {Subject, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorStore {
  error$ = new Subject<string>()

  create = (message: string) => this.error$.next(message)

  clear = () => this.error$.next('')

  catchError = (error: HttpErrorResponse) => {
    this.create(error.message)
    return throwError(() => error.message)
  }
}
