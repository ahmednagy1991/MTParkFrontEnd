import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private api: Api) { }

  getAllMessages() {
    return this.api.get("message");
  }
}
