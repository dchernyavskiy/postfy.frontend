import {Component} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {BehaviorSubject, catchError, map, of} from "rxjs";
import {NotificationService, Notification} from "../../../core/services/notification.service";
import {UserSettingsDto} from "../../../api/network/models/user-settings-dto";
import {ChangeNotificationsSettings} from "../../../api/network/models/change-notifications-settings";
import {ChangePrivacySettings} from "../../../api/network/models/change-privacy-settings";
import {UpdateUser} from "../../../api/identity/models/update-user";
import {ChangeBio} from "../../../api/network/models/change-bio";
import {Permissions} from "../../../api/network/models/permissions";
import {UsersService as IUsersService} from "../../../api/identity/services/users.service";
import {UsersService as NUsersService} from "../../../api/network/services/users.service";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  signedInWithGoogle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: UserSettingsDto = {};
  changeNotificationSettings: ChangeNotificationsSettings = {settings: {}};
  changePrivacySettings: ChangePrivacySettings = {settings: {}};
  updateUser: UpdateUser = {};
  changeBio: ChangeBio = {};

  permissions = [
    {name: 'Everyone', value: Permissions.Everyone},
    {name: 'Followings', value: Permissions.Followings},
    {name: 'Nobody', value: Permissions.Nobody},
  ];

  constructor(
    private readonly iUsersService: IUsersService,
    private readonly nUsersService: NUsersService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService) {
    this.signedInWithGoogle$ = this.authService.signedInWithGoogle$;
    this.nUsersService.getSettings().subscribe(res => {
      this.user = res.user!;
      this.setupUpdate()
      this.changeBio.bio = res.user?.bio;
      this.changePrivacySettings.settings = res.user?.privacySettings ?? {};
      this.changeNotificationSettings.settings = res.user?.notificationSettings ?? {};
    })
  }

  setupUpdate() {
    this.updateUser = {
      userId: this.authService.getUserId()!,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      userName: this.user.profileName
    }
  }

  changeNSettings() {
    this.nUsersService.changeNotificationsSettings({body: this.changeNotificationSettings}).subscribe(res => {
      this.notificationService.add(new Notification("Notification settings was updated."));
    })
  }

  changePSettings() {
    this.nUsersService.changePrivacySettings({body: this.changePrivacySettings}).subscribe(res => {
      this.notificationService.add(new Notification("Privacy settings was updated."));
    })
  }

  changeGeneralInfo() {
    this.iUsersService.updateUser({body: this.updateUser})
      .pipe(
        map(res => res),
        catchError((error, res) => {
          this.notificationService.add(new Notification(error.detail));
          throw new Error();
        }))
      .subscribe(res => {
        this.notificationService.add(new Notification("General information was updated."));
        if (this.user.bio !== this.changeBio.bio) {
          this.nUsersService.changeBio({body: this.changeBio}).subscribe(res => {
            this.notificationService.add(new Notification("Bio was updated."));
          })
        }
      })
  }
}
