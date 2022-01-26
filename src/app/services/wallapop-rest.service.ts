import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Item } from '../models';

@Injectable({
  providedIn: 'root',
})
export class WallapopRESTService {
  private wallapopApiUrl =
    'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json'; // URL to wallapop api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET List from the server */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.wallapopApiUrl).pipe(
      tap((_) => console.log('fetched List')),
      catchError(this.handleError<Item[]>('getPlace', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
