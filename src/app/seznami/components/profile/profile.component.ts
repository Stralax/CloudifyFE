import { Component } from '@angular/core';
import { LoyaltyComponent } from '../loyalty/loyalty.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [LoyaltyComponent, NavbarComponent]
})
export class ProfileComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';
  balance: number = 1500;
}
