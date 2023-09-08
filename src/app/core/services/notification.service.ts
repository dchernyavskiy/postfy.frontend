import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: Notification[] = [];

  close(notification: Notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
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
