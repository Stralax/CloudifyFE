import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css'],
  standalone: true
})
export class FlightStatusComponent {
  flightStatuses: string[] = [
    'Not ready to set off',
    'Ready to set off',
    'In the air',
    'Landed',
    'Unknown status'
  ];

  // Randomize the flight status
  currentStatus: string = this.flightStatuses[Math.floor(Math.random() * this.flightStatuses.length)];

}
