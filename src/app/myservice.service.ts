import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor( private http: HttpClient) { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
  
  private privateData = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";

  getData() {
    return this.http.get( this.apiurl );
  }

}
