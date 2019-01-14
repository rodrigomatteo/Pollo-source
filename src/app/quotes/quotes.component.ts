import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getAllQuotes()
      .subscribe(
          data => {
            this.quotes = data;
            console.log(this.quotes);
          }
      )
  }

}