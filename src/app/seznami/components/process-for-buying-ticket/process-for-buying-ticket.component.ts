import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-process-for-buying-ticket',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './process-for-buying-ticket.component.html',
  styleUrls: ['../../../../public/css/buyingTickets.css']
})
export class ProcessForBuyingTicketComponent {

}