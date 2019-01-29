import { DataService } from './../services/data.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Quote } from '../models/quote';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: Quote;
  isEdit: boolean;
  isNew: boolean;
  @ViewChild('firstName') firstName:ElementRef;

  constructor(
    private dataService : DataService,
    private router : Router
  ) { 
    this.quote = new Quote();
    this.quote.addLine(1);
    this.quote.addLine(2);
    this.isNew = this.router.url === '/quotes/new';
    this.isEdit = this.isNew;
  }

  ngOnInit() {
    if(!this.isNew){
      this.getQuote(1);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.firstName.nativeElement.focus());
  }

  cancelQuote(){
    this.router.navigate(['quotes']);
  }

  getQuote(id: number){
    this.dataService.getQuote(id)
    .subscribe(
        data => {
          this.quote = data;
          console.log(this.quote);
        }
    )
  }
}