import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
//import { AdminModel} from '../Models/AdminModel'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public api: Api) { }

  getAllUsers(pageNumber: number, pageLimit: number) {
    return this.api.get("users?page=" + pageNumber + "&limit=" + pageLimit);
  }

  // UpdateAdmin(admin: AdminModel) {    
  //   return this.api.put("admins/update", admin);
  // }

}
