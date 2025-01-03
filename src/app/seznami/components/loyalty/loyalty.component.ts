import { Component } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css'],
  standalone: true
})
export class LoyaltyComponent {
  loyaltyPoints: number = 1000;

  // Example of calling the addLoyaltyPoints method

  //const loyaltyComponent = new LoyaltyComponent();
  //loyaltyComponent.addLoyaltyPoints(500); // Adds 500 points to the current total

  addLoyaltyPoints(points: number) {
    this.loyaltyPoints += points;
    console.log(`Loyalty points updated. New total: ${this.loyaltyPoints}`);
  }
}
