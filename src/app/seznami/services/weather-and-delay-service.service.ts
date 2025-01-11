import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDelayPrediction } from '../classes/weatherDelayPrediction';

@Injectable({
  providedIn: 'root'
})
export class WeatherAndDelayServiceService {

  private url = 'http://localhost:8080/v1/weather-delay-prediction/';

  constructor(private http: HttpClient) { }

  getWeatherData(id: string): Observable<WeatherDelayPrediction> {
    return this.http.get<WeatherDelayPrediction>(this.url+id)
        .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error);
    return Promise.reject(error.message || error);
}
}
