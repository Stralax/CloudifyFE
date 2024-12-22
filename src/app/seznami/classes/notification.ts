import { User } from './user';

export class Notification {
    notificationId: string;
    userId: string;
    // notifiedUsers: User[]; // Uncomment if required
    textLength: number;
    sendingTime: string;
    title: string;
    content: string;
    notificationType: string;
    
}
