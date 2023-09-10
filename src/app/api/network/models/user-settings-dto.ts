/* tslint:disable */
/* eslint-disable */
import { MediaBriefDto } from '../models/media-brief-dto';
import { NotificationSettings } from '../models/notification-settings';
import { PrivacySettings } from '../models/privacy-settings';
export interface UserSettingsDto {
  bio?: null | string;
  email?: null | string;
  firstName?: null | string;
  id?: string;
  lastName?: null | string;
  notificationSettings?: NotificationSettings;
  phoneNumber?: null | string;
  privacySettings?: PrivacySettings;
  profileImage?: MediaBriefDto;
  profileName?: null | string;
}
