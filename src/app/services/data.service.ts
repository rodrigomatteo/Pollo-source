import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Quote } from './../models/quote';
import { Sale } from './../models/sale';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://my-json-server.typicode.com/rodrigomatteo/Pollo-source/";
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url + "users");
  }

  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url + 'quotes');
  }

  getAllSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url + 'sales');
  }
}
