import {Component, OnDestroy} from '@angular/core';
import {NotificationService, Notification} from "../../../core/services/notification.service";
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";
import {environment} from "../../../../environments/environment";
import {AuthService} from 'src/app/core/services/auth.service';
import {
  bounceInRightOnEnterAnimation, bounceOutRightOnLeaveAnimation,
} from "angular-animations";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation(),
    bounceOutRightOnLeaveAnimation(),
  ]
})
export class NotificationComponent implements OnDestroy {
  notifications: Notification[] = [];
  private hubConnection: HubConnection = new HubConnectionBuilder()
    .withUrl(environment.apiUrl + '/signalr/v1/network/notification?userId=' + this.authService.getUserId())
    .build();

  constructor(private readonly notificationService: NotificationService, private readonly authService: AuthService) {
    this.notifications = notificationService.notifications;
    this.hubConnection.start().then(_ => {
      this.hubConnection.on('ReceiveNotification', (data: any) => {
        const notification = new Notification(data.text);
        this.notificationService.add(notification);
      });
    })
  }

  close(notification: Notification) {
    this.notificationService.close(notification);
  }

  ngOnDestroy(): void {
    this.hubConnection.stop();
  }
}
