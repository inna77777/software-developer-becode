import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit, OnChanges {
  @Input() forecastData: any;
  @Input() isCelsius: boolean = true;
  @ViewChild('forecastChart', { static: false }) chartRef!: ElementRef;

  chart: any;

  ngOnInit() {
    if (this.forecastData && this.forecastData.length) {
      this.createChart();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ForecastComponent ngOnChanges triggered:', changes);

    if (changes['forecastData']) {
      console.log('Received forecast data:', this.forecastData);
    }

    if (this.forecastData && this.forecastData.length) {
      setTimeout(() => this.createChart(), 0);
    }
  }

  getTemperature(temp: number): number {
    return this.isCelsius ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
  }

  createChart() {
    if (!this.forecastData || this.forecastData.length === 0) {
      console.warn('No forecast data available for the chart.');
      return;
    }

    const canvas = this.chartRef?.nativeElement;
    if (!canvas) {
      console.error('Canvas element not found!');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas rendering context not found!');
      return;
    }

    Chart.register(...registerables);

    if (this.chart) {
      this.chart.destroy();
    }

    const days = this.forecastData.map((data: any) => data.day);
    const temperaturesMax = this.forecastData.map((data: any) =>
      this.getTemperature(data.originalTempMax)
    );
    const temperaturesMin = this.forecastData.map((data: any) =>
      this.getTemperature(data.originalTempMin)
    );

    console.log('Creating Chart with:', {
      days,
      temperaturesMax,
      temperaturesMin,
    });

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: days,
        datasets: [
          {
            label: `Max Temp (${this.isCelsius ? '°C' : '°F'})`,
            data: temperaturesMax,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4,
          },
          {
            label: `Min Temp (${this.isCelsius ? '°C' : '°F'})`,
            data: temperaturesMin,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}
