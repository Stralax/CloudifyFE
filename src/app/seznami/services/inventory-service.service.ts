import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../classes/flight';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  private url = 'http://localhost:8080/v1/flights/';

  constructor(private http: HttpClient) { }

    getFlight(id: string): Observable<Flight> {
      return this.http.get<Flight>(this.url+id)
        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
      console.error('Prišlo je do napake', error);
      return Promise.reject(error.message || error);
    }
}
