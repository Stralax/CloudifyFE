import { Flight } from './flight'; 
import { Passenger } from './passenger';
import { Payment } from './payment';

export class BookingRequest {
    flight: Flight;
    passenger: Passenger;
    paymentMethod: Payment;
}
