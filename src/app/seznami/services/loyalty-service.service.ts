import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoyaltyServiceService {
  private baseUrl: string = 'http://localhost:8080/v1/loyalty';

  constructor(private http: HttpClient) {}

  getLoyaltyPoints(id: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${id}`);
  }
}
