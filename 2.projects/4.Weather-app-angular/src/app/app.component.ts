import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ForecastComponent,
    WeatherDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Weather App';
  city: string = '';
  weatherData: any = null;
  error: string = '';
  isCelsius: boolean = true;
  apiKey: string = '7928b8fafat7344abbe4f90d8711dbbo';
  loading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // You can fetch weather data for the user's location on init
    this.getUserLocationWeather();
  }

  // Method to get weather based on city entered by the user
  getCityWeather(event: any) {
    event.preventDefault();
    this.loading = true;

    if (!this.city.trim()) {
      this.error = 'City name is required!';
      this.loading = false;
      return;
    }
    this.error = '';

    const url = `https://api.shecodes.io/weather/v1/current?query=${this.city}&key=${this.apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          this.error = 'City not found!';
          this.loading = false;
          return;
        }

        // Set city name from API response
        this.city = data.city;

        this.weatherData = {
          city: this.city,
          originalTemperature: data.temperature.current,
          originalFeelsLike: data.temperature.feels_like,
          description: data.condition.description,
          humidity: data.temperature.humidity,
          windSpeed: data.wind.speed,
          icon: data.condition.icon_url,
          dateTime: new Date().toLocaleString(),
          forecast: [],
        };

        this.getForecast(this.city);
      })
      .catch(() => {
        this.error = 'Failed to fetch data.';
        this.loading = false;
      });
  }

  // Method to get forecast for the city
  getForecast(city: string) {
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${this.apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data.daily || data.daily.length === 0) {
          console.error('No forecast data received.');
          return;
        }

        this.weatherData.forecast = data.daily.slice(1, 7).map((day: any) => ({
          day: new Date(day.time * 1000).toLocaleString('en-us', {
            weekday: 'short',
          }),
          originalTempMax: Math.round(day.temperature.maximum),
          originalTempMin: Math.round(day.temperature.minimum),
          icon: day.condition.icon_url,
        }));
        this.loading = false;
      })
      .catch(() => {
        this.error = 'Failed to fetch forecast data.';
        this.loading = false;
      });
  }

  // Method to toggle between Celsius and Fahrenheit
  toggleTemperatureUnit() {
    this.isCelsius = !this.isCelsius;
  }

  // Method to get weather based on user's geolocation
  getUserLocationWeather() {
    this.loading = true;

    if (!navigator.geolocation) {
      this.error = 'Geolocation is not supported.';
      this.loading = false;
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        this.fetchWeatherByCoordinates(lat, lon);
      },
      () => {
        this.error = 'Unable to retrieve location.';
        this.loading = false;
      }
    );
  }

  // Method to fetch weather data using coordinates
  fetchWeatherByCoordinates(lat: number, lon: number) {
    const url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${this.apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          this.error = 'Failed to retrieve location weather.';
          this.loading = false;
          return;
        }

        this.city = data.city;

        this.weatherData = {
          city: this.city,
          originalTemperature: data.temperature.current,
          originalFeelsLike: data.temperature.feels_like,
          description: data.condition.description,
          humidity: data.temperature.humidity,
          windSpeed: data.wind.speed,
          icon: data.condition.icon_url,
          dateTime: new Date().toLocaleString(),
          forecast: [],
        };

        this.getForecast(this.city);
      })
      .catch(() => {
        this.error = 'Failed to fetch data.';
        this.loading = false;
      });
  }
}
