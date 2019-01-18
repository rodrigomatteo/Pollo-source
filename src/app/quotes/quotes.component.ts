import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];

  constructor(
    private dataService : DataService,
    private router : Router
  ) { 

  }

  ngOnInit() {
    this.dataService.getAllQuotes()
      .subscribe(
          data => {
            this.quotes = data;
            console.log(this.quotes);
          }
      )
  }

  cancelQuote(){
    this.router.navigate(['quotes']);
  }
}