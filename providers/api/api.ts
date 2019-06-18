import { HttpClient, HttpParams } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';

// import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { ENDPOINT_URL } from '../../config/globals';
import { Observable } from 'rxjs';

@Injectable()
export class Api {

  end_point_url: string;


  constructor(public http: HttpClient, public httpclient: HttpClient) {
    this.end_point_url = ENDPOINT_URL;

  }

  // callGetWithoutMainURL(endpoint: string, body: string, params?: any, reqOpts?: any) {   
  //   let headers = new Headers();
  //   return this.http.post(endpoint, body)

  // }

  // callGet(endpoint: string, body: string, params?: any, reqOpts?: any) {
  //   let headers = new Headers();
  //   return this.http.post(this.url + '/' + endpoint, body)

  // }


  // get(endpoint: string, params?: any, reqOpts?: any) {
  //   if (!reqOpts) {
  //     reqOpts = {
  //       params: new HttpParams()
  //     };
  //   }

  //   // Support easy query params for GET requests
  //   if (params) {
  //     reqOpts.params = new HttpParams();
  //     for (let k in params) {
  //       reqOpts.params = reqOpts.params.set(k, params[k]);
  //     }
  //   }
  //   //this.url + '/' +
  //   return this.http.get(endpoint, reqOpts);
  // }


  get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {   
    return this.http.get(this.end_point_url + '/' + endpoint, params)
  } 

  post(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.post(this.end_point_url + '/' +endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.put(this.end_point_url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any): Observable<any>  {
    return this.http.delete(this.end_point_url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any): Observable<any>  {
    return this.http.patch(this.end_point_url + '/' + endpoint, body, reqOpts);
  }
}
