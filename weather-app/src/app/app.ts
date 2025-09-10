import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  weatherData?: any;
  cityName: string = 'asansol';
  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.getWeatherDate(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherDate(this.cityName);
    this.cityName = '';
  }
  private getWeatherDate(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Weather:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }
}
