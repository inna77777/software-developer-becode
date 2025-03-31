import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '7928b8fafat7344abbe4f90d8711dbbo';
  private apiUrl = 'https://api.shecodes.io/weather/v1/';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}current?query=${city}&key=${this.apiKey}`
    );
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}current?lat=${lat}&lon=${lon}&key=${this.apiKey}`
    );
  }

  getWeatherForecast(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}forecast?query=${city}&key=${this.apiKey}`
    );
  }
}
