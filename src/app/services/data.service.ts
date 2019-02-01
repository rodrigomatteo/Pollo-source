import { State } from './../models/state';
import { City } from './../models/city';
import { Country } from './../models/country';
import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Quote } from './../models/quote';
import { Sale } from './../models/sale';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://almagesto-server.azurewebsites.net/";
  //url = "http://localhost:3000/";
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url + "users");
  }

  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.url + 'quotes');
  }

  getQuote(id: number): Observable<Quote>{
    return this.http.get<Quote>(this.url + 'quotes/' + id);
  }

  getAllSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url + 'sales');
  }

  getSale(id: number): Observable<Sale>{
    return this.http.get<Sale>(this.url + 'sales/' + id);
  }
  
  getAllProducts(){
    return this.http.get<Product[]>(this.url + 'products');
  }

  getAllCountries(){
    return this.http.get<Country[]>(this.url + 'countries');
  }

  getAllCities(){
    return this.http.get<City[]>(this.url + 'cities');
  }
  
  getAllStates(){
    return this.http.get<State[]>(this.url + 'states');
  }
  
}
