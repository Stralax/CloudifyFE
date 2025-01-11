import { Component } from '@angular/core';
import { WeatherAndDelayServiceService } from '../../services/weather-and-delay-service.service';
import { WeatherDelayPrediction } from '../../classes/weatherDelayPrediction';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-and-delay',
  templateUrl: './weather-and-delay.component.html',
  styleUrls: ['./weather-and-delay.component.css'],
  standalone: true
})
export class WeatherAndDelayComponent {
  // Static properties with random values for now

  weatherDetails: WeatherDelayPrediction | null = null;
  errorMessage: string | null = null;

  delayProbability: string;
  finalDestination: string;
  finalDestinationDelayProbability: string;
  finalDestinationWeatherForecast: string;
  finalProbabilityOfDelay: string;
  flightId: string;
  humidity: string;
  originDestination: string;
  temperature: string;
  visibility: string;
  weatherForecast: string;
  windSpeed: string;

  weatherId: string | null = null;

  constructor(
      private weatherAndDelayServiceService: WeatherAndDelayServiceService,
      private route: ActivatedRoute,
    ) {}

  // Random weather generator
  getRandomWeather(): string {
    const weatherOptions = ['Sunny', 'Cloudy', 'Moderate snow', 'Heavy rain', 'Clear sky', 'Thunderstorms'];
    return weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
  }

  ngOnInit(): void {

      this.route.paramMap.subscribe(params => {
        this.weatherId = params.get('id');  // Get the flight ID from the URL
      });
  
      this.weatherAndDelayServiceService.getWeatherData(this.weatherId).subscribe({
        next: (data: WeatherDelayPrediction) => {
          this.weatherDetails = data;
          console.log('Flight data fetched:', data);
          this.delayProbability = this.weatherDetails.delayProbability;
          this.finalDestination = this.weatherDetails.finalDestination;
          this.finalDestinationDelayProbability  = this.weatherDetails.finalDestinationDelayProbability;
          this.finalDestinationWeatherForecast = this.weatherDetails.finalDestinationWeatherForecast ;
          this.finalProbabilityOfDelay = this.weatherDetails.finalProbabilityOfDelay;
          this.flightId = this.weatherDetails.flightId;
          this.humidity = this.weatherDetails.humidity;
          this.originDestination = this.weatherDetails.originalDestination;
          this.temperature = this.weatherDetails.temperature;
          this.visibility = this.weatherDetails.visibility;
          this.weatherForecast = this.weatherDetails.weatherForecast;
          this.windSpeed = this.weatherDetails.windSpeed; 
        },
        error: (error) => {
          this.errorMessage = 'Error fetching flight details';
          console.error('Error:', error);
        }
      });
    }
}