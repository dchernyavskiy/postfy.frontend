import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[] = [];

  close(notification: Notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

  add(notification: Notification) {
    this.notifications.push(notification);
    setTimeout(() => {
      this.close(notification)
    }, 5000);
  }

  constructor() {
  }
}

export class Notification {
  private static _id = 1;
  get id() {
    return Notification._id++;
  }

  text: string = '';

  constructor(text: string) {
    this.text = text;
  }
}
