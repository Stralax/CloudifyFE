import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAndDelayComponent } from '../weather-and-delay/weather-and-delay.component';
import { FlightStatusComponent } from '../flight-status/flight-status.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-detail-for-picked-flight',
  templateUrl: './detail-for-picked-flight.component.html',
  styleUrls: ['./detail-for-picked-flight.component.css'],
  standalone: true,
  imports: [WeatherAndDelayComponent, FlightStatusComponent, NavbarComponent],
})
export class DetailForPickedFlightComponent {

  constructor(private router: Router) {}

  redirectToOtherPage() {
    this.router.navigate(['/buyingTickets']);
  }
}
