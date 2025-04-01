import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
})
export class WeatherDetailsComponent {
  @Input() weatherData: any;
  @Input() isCelsius: boolean = true;
  @Output() temperatureToggle = new EventEmitter<void>(); // EventEmitter to notify the parent component

  getTemperature(temp: number): number {
    return this.isCelsius ? Math.floor(temp) : Math.floor((temp * 9) / 5 + 32);
  }

  toggleTemperatureUnit() {
    this.temperatureToggle.emit(); // Emit the event to toggle the temperature unit
  }
}
