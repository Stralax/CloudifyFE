import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from '../navbar/navbar.component';
import { FlightListComponent } from '../flight-list/flight-list.component';
import { FlightService } from '../../services/flight.service';
import { Flight } from '../../classes/flight';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-search-home-page',
  templateUrl: './search-home-page.component.html',
  imports: [
    FormsModule, NavbarComponent, FlightListComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-home-page.component.css']
})
export class SearchHomePageComponent {
  fromLocation: string = '';
  toLocation: string = '';
  departureDate: string = '';
  seats: number = 1;
  travelClass: string = '';

  public flights: Flight[] = [];

  constructor(private flightService: FlightService, private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}

  searchFlights() {
    if (
        !this.fromLocation ||
        !this.toLocation ||
        !this.departureDate ||
        !this.travelClass
    ) {
      alert('Please fill out all fields!');
      return;
    }

    this.flightService
        .searchFlights(
            this.fromLocation,
            this.toLocation,
            this.departureDate,
            this.seats,
            this.travelClass
        )
        .subscribe(
            (data :Flight[]) => {
              this.flights = [...data];
              console.log('Flights fetched successfully:', data);
                this.changeDetectorRef.markForCheck();

            },
            (error) => {
              console.error('Error fetching flights:', error);
              alert('Failed to fetch flights. Please try again later.');
            }
        );
  }
}
