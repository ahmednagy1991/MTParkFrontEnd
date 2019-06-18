import { Injectable } from '@angular/core';
import { Api } from '../providers/api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public api: Api) { }

  public login(email: string, password: string):Promise<any> {
    return  new Promise((resolve, reject) => {
     
      this.api.post("auth/login", { username: email,password: password }).subscribe((res) => {      
           
        if (res.token) {      
          localStorage.setItem("current_user", JSON.stringify(res.data));
          localStorage.setItem('ParkAccessToken', res.token);
          resolve(true);
        }
        else
        {
          reject(false);
        }
      });
    });   
  }

  public logout() {
    localStorage.removeItem('ParkAccessToken');
    sessionStorage.removeItem('ParkAccessToken');
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return true;

  }
}
