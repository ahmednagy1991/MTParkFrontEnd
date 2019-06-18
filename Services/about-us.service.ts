import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';
//import { AboutUsModel } from '../Models/AboutUsModel';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(public api: Api) { }

  getAll() {
    return this.api.get("about");
  }

  // UpdateOffer(about: AboutUsModel) {
  //   return this.api.put("about/" + about._id, about);
  // }

}
