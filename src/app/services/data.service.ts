import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://my-json-server.typicode.com/rodrigomatteo/Pollo-source";
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url + "/users");
  }
}