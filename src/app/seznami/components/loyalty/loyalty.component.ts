import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css'],
  standalone: true
})
export class LoyaltyComponent {
  @Input() loyaltyPoints: number = 0;
}
