import {Component} from '@angular/core';
import {
  ChangeBio,
  ChangeNotificationsSettings,
  ChangePrivacySettings,
  NetworkApiClient, Permissions,
  UserSettingsDto
} from "../../../api/network-api";
import {IdentityApiClient, UpdateUser} from "../../../api/identity-api";
import {AuthService} from "../../../core/services/auth.service";
import {BehaviorSubject, catchError, map, of} from "rxjs";
import {th} from "date-fns/locale";

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

  constructor(private readonly networkApiClient: NetworkApiClient,
              private readonly identityApiClient: IdentityApiClient,
              private readonly authService: AuthService) {
    this.signedInWithGoogle$ = this.authService.signedInWithGoogle$;
    this.networkApiClient.getSettings({}).subscribe(res => {
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
    this.networkApiClient.changeNotificationsSettings(this.changeNotificationSettings).subscribe(res => {
      console.log(res)
    })
  }

  changePSettings() {
    this.networkApiClient.changePrivacySettings(this.changePrivacySettings).subscribe(res => {
      console.log(res)
    })
  }

  changeGeneralInfo() {
    this.identityApiClient.updateUser(this.updateUser)
      .pipe(
        map(res => res),
        catchError((error, res) => {
          console.log(error)
          throw new Error();
        }))
      .subscribe(res => {
        console.log(res)
        if (this.user.bio !== this.changeBio.bio) {
          this.networkApiClient.changeBio(this.changeBio).subscribe(res => {
            console.log(res)
          })
        }
      })
  }
}
