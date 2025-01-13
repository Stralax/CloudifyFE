import { Component, OnInit } from '@angular/core';
import { LoyaltyComponent } from '../loyalty/loyalty.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoyaltyServiceService } from '../../services/loyalty-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [LoyaltyComponent, NavbarComponent]
})
export class ProfileComponent implements OnInit {
  firstName: string = '';
  balance: number = 1500;
  loyaltyPoints: number = 0;
  constructor(
      private route: ActivatedRoute,
      private loyaltyService: LoyaltyServiceService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.loyaltyService.getLoyaltyPoints(userId).subscribe({
      next: (response: any) => {
        //console.log('Full API Response:', response);
        if (response && response.userName !== undefined) {
          this.firstName = response.userName;
          //console.log(response);
          //console.log(response.userName);
        }

        if (response && response.points !== undefined) {
          this.loyaltyPoints = response.points;
          //console.log('Extracted Loyalty Points:', this.loyaltyPoints);
        } else {
          console.error('API response does not contain "points" property.');
        }
      },
      error: (err) => {
        console.error('Failed to fetch loyalty points:', err);
      }
    });
  }

}
