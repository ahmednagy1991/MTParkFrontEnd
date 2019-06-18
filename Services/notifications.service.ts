import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
//import { NotificationModel} from '../Models/NotificationModel'
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public api: Api) { }

  GetNotifications() {
    return this.api.get("notifications");
  }
  GetTokens() {
    return this.api.get("notifications/tokens");
  }
  // SendNotification(noti: NotificationModel) {
  //   return this.api.post("notifications/new", noti);
  // }
}
