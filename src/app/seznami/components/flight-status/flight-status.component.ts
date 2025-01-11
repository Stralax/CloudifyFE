import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css'],
  standalone: true
})
export class FlightStatusComponent {
  @Input() flightStatus: string | null = null;

  get displayStatus(): string {
    return this.flightStatus || 'Fetching status...';
  }

}
