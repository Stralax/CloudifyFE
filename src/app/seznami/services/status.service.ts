import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { FlightStatus } from '../classes/flightStatus';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url = 'http://localhost:8080/v1/flights/';

  constructor(private http: HttpClient) { }

  /**
   * Fetch flight status by flight ID
   * @param flightId The flight ID
   * @returns Observable with the flight status
   */
  getFlightStatus(flightId: string): Observable<string> {
      const statusUrl = `${this.url}${flightId}/status`; // Ensure this URL is correct
      return this.http.get<FlightStatus>(statusUrl).pipe(
          map((data: FlightStatus) => {
              console.log('API response for flight status:', data.status);
              return data.status; // Check if this returns "Not ready to set off"
          }),
          catchError((error) => {
              console.error('Error in getFlightStatus:', error);
              return throwError(() => new Error('Failed to fetch flight status.'));
          })
      );
  }

}
