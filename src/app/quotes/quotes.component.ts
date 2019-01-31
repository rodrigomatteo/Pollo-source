import { DataService } from './../services/data.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Quote } from '../models/quote';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: Quote;
  isEdit: boolean;
  isNew: boolean;
  @ViewChild('fName') fName:ElementRef;

  constructor(
    private dataService : DataService,
    private router : Router,
    private route: ActivatedRoute
  ) { 
    this.quote = new Quote();
    this.quote.addLine(1);
    this.isNew = this.router.url === '/quotes/new';
    this.isEdit = this.isNew;
  }

  ngOnInit() {
    if(!this.isNew){
      const id = +this.route.snapshot.paramMap.get('id');      
      this.getQuote(id);
    }
  }

  ngAfterViewInit() {
    if(this.isNew){
      setTimeout(() => this.fName.nativeElement.focus());
    }
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

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.quote))
  }
}