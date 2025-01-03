import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search-home-page',
  templateUrl: './search-home-page.component.html',
  imports: [
    FormsModule, NavbarComponent
  ],
  standalone: true,
  styleUrls: ['./search-home-page.component.css']
})
export class SearchHomePageComponent {
  fromLocation: string = '';
  toLocation: string = '';
  departureDate: string = '';
  seats: number = 1;
  travelClass: string = '';

  searchFlights() {
    console.log('Searching for flights...');
    console.log(`From: ${this.fromLocation}`);
    console.log(`To: ${this.toLocation}`);
    console.log(`Date: ${this.departureDate}`);
    console.log(`Seats: ${this.seats}`);
    console.log(`Class: ${this.travelClass}`);
    // Here, you can implement the logic to trigger the actual search, either by making an API call or navigating to a results page.
  }
}
