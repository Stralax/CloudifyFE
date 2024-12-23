import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Flight } from '../../classes/flight';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './flight-list.component.html',
  styleUrls: ['../../../../public/css/flight-list.component.css']
})
export class FlightListComponent {
  public flights: Flight[];
  
  ngOnInit(): void{
    
  }
}
