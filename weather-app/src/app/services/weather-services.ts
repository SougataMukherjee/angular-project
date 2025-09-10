import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = `${environment.weatherApiBaseUrl}/weather`;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric') // Celsius
        .set('appid', environment.openWeatherApiKey) // API key
    });
  }
}
