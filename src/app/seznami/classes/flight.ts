export class Flight {
    flightId: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: Date; // LocalDateTime mapped to Date in TypeScript
    arrivalTime: Date;
    price: number;
    duration: string; // Duration represented as a string (e.g., "PT6H30M")
    maxSeats: number;
    travelClass: string;
    
}
