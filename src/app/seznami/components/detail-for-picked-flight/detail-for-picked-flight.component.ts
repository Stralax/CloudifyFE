import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAndDelayComponent } from '../weather-and-delay/weather-and-delay.component';
import { FlightStatusComponent } from '../flight-status/flight-status.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { InventoryServiceService } from '../../services/inventory-service.service';
import { Flight } from '../../classes/flight';
import { WeatherAndDelayServiceService } from '../../services/weather-and-delay-service.service';
import { WeatherDelayPrediction } from '../../classes/weatherDelayPrediction';
import { ActivatedRoute } from '@angular/router';
import { StatusService } from '../../services/status.service';


@Component({
  selector: 'app-detail-for-picked-flight',
  templateUrl: './detail-for-picked-flight.component.html',
  styleUrls: ['./detail-for-picked-flight.component.css'],
  standalone: true,
  imports: [WeatherAndDelayComponent, FlightStatusComponent, NavbarComponent],
})
export class DetailForPickedFlightComponent implements OnInit{

  flightDetails: Flight | null = null;
  weatherDetails: WeatherDelayPrediction | null = null;
  flightStatus: string | null = null;
  errorMessage: string | null = null;
  flightId: string | null = null;

  constructor(private router: Router,
    private inventoryServiceService: InventoryServiceService,
    private weatherAndDelayServiceService: WeatherAndDelayServiceService,
    private flightStatusService: StatusService,
    private route: ActivatedRoute,
  ) {}

  redirectToOtherPage() {
    this.router.navigate(['/buyingTickets']);
  }


  ngOnInit(): void {
    // Capture the flight ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.flightId = params.get('id'); // Get 'id' from URL
      if (this.flightId) {
        this.fetchFlightDetails(this.flightId);
      }
    });
  }

  // Fetch flight details from the service
  fetchFlightDetails(flightId: string): void {
    this.inventoryServiceService.getFlight(flightId).subscribe({
      next: (data: Flight) => {
        this.flightDetails = data; // Assign fetched data
        console.log('Flight details:', data);

        // Fetch the flight status after getting the details
        this.fetchFlightStatus(flightId);
      },
      error: (error) => {
        this.errorMessage = 'Failed to fetch flight details. Please try again later.';
        console.error('Error fetching flight details:', error);
      },
    });
  }

  fetchFlightStatus(flightId: string): void {
    this.flightStatusService.getFlightStatus(flightId).subscribe({
      next: (status: string) => {
        this.flightStatus = status;
        console.log('Flight statusssssssssssssssssssssss:', status);
      },
      error: (error) => {
        console.error('Error fetching flight status:', error);
      },
    });
  }

}
