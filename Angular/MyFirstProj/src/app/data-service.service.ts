import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private url = "http://localhost:8080";

  constructor(private http_client:HttpClient) { }

  checkLogin(user:any){
    alert("service called");
    //here we would make connection with the server using HttpClient
    return this.http_client.post(this.url + '/users/' + user.email, user)
  }
}
