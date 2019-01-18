import { DataService } from '../../services/data.service';
import { Quote } from '../../models/quote';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  quotes: Quote[];
  
  constructor(
    private dataService : DataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.dataService.getAllQuotes()
    .subscribe(
        data => {
          this.quotes = data;
          console.log(this.quotes);
        }
    )
}

  newQuote() {
    this.router.navigate(['quotes/new']);
  }
}
