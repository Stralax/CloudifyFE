import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-and-delay',
  templateUrl: './weather-and-delay.component.html',
  styleUrls: ['./weather-and-delay.component.css'],
  standalone: true
})
export class WeatherAndDelayComponent {
  // Static properties with random values for now
  delayProbability: string = `${Math.floor(Math.random() * 100)}%`;
  finalDestination: string = 'Vladivostok';
  finalDestinationDelayProbability: string = `${Math.floor(Math.random() * 100)}%`;
  finalDestinationWeatherForecast: string = this.getRandomWeather();
  finalProbabilityOfDelay: string = `${Math.floor(Math.random() * 100)}%`;
  flightId: string = '54';
  humidity: number = Math.floor(Math.random() * 100);
  originDestination: string = 'Moscow';
  temperature: string = (Math.random() * (30 - (-30)) + (-30)).toFixed(1); // Random temperature between -30 and 30
  visibility: string = (Math.random() * (1 - 0) + 0).toFixed(1); // Random visibility between 0 and 1
  weatherForecast: string = this.getRandomWeather();
  windSpeed: string = (Math.random() * 50).toFixed(1); // Random wind speed between 0 and 50 km/h

  // Random weather generator
  getRandomWeather(): string {
    const weatherOptions = ['Sunny', 'Cloudy', 'Moderate snow', 'Heavy rain', 'Clear sky', 'Thunderstorms'];
    return weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
  }
}
