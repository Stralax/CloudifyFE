import { Flight } from './flight';
import { Passenger } from './passenger';

export class Booking {
    bookingId: string;
    flight: Flight;
    passengers: Passenger[];
    totalPrice: number;
}
