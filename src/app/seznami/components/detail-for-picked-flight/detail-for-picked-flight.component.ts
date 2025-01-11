import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAndDelayComponent } from '../weather-and-delay/weather-and-delay.component';
import { FlightStatusComponent } from '../flight-status/flight-status.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { InventoryServiceService } from '../../services/inventory-service.service';
import { Flight } from '../../classes/flight';
import { WeatherAndDelayServiceService } from '../../services/weather-and-delay-service.service';
import { WeatherDelayPrediction } from '../../classes/weatherDelayPrediction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-for-picked-flight',
  templateUrl: './detail-for-picked-flight.component.html',
  styleUrls: ['./detail-for-picked-flight.component.css'],
  standalone: true,
  imports: [WeatherAndDelayComponent, FlightStatusComponent, NavbarComponent],
})
export class DetailForPickedFlightComponent {

  flightDetails: Flight | null = null;
  weatherDetails: WeatherDelayPrediction | null = null;
  errorMessage: string | null = null;
  flightId: string | null = null;

  constructor(private router: Router,
    private inventoryServiceService: InventoryServiceService,
    private weatherAndDelayServiceService: WeatherAndDelayServiceService,
    private route: ActivatedRoute,
  ) {}

  redirectToOtherPage() {
    this.router.navigate(['/buyingTickets']);
  }
  

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.flightId = params.get('id');  // Get the flight ID from the URL
    });

    // Call the service method
    this.inventoryServiceService.getFlight(this.flightId).subscribe({
      next: (data: Flight) => {
        this.flightDetails = data;
        console.log('Flight data fetched:', data);
      },
      error: (error) => {
        this.errorMessage = 'Error fetching flight details';
        console.error('Error:', error);
      }
    });

    
    // this.weatherAndDelayServiceService.getWeatherData(weatherId).subscribe({
    //   next: (data: WeatherDelayPrediction) => {
    //     this.weatherDetails = data;
    //     console.log('Flight data fetched:', data);
    //   },
    //   error: (error) => {
    //     this.errorMessage = 'Error fetching flight details';
    //     console.error('Error:', error);
    //   }
    // });
  }
}
