import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../classes/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'http://localhost:8080/v1/flights/search';

  constructor(private http: HttpClient) {}

  searchFlights(
      origin: string,
      destination: string,
      departureDate: string,
      availableSeats: number,
      travelClass: string
  ): Observable<Flight[]> {
    const params = new HttpParams()
        .set('origin', origin)
        .set('destination', destination)
        .set('departureDate', departureDate)
        .set('availableSeats', availableSeats.toString())
        .set('travelClass', travelClass);

    return this.http.get<Flight[]>(this.baseUrl, { params });
  }
}

