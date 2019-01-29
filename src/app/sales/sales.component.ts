import { DataService } from './../services/data.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Sale } from './../models/sale';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sale: Sale;
  isEdit: boolean;
  isNew: boolean;
  @ViewChild('number') number:ElementRef;
  
  constructor(
    private dataService : DataService,
    private router : Router
  ) { 
    this.sale = new Sale();
    this.sale.addLine(1);
    this.sale.addLine(2);
    this.isNew = this.router.url === '/sales/new';
    this.isEdit = this.isNew;
}

  ngOnInit() {
    if(!this.isNew){
      this.getSale(1);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.number.nativeElement.focus());
  }
  

  cancelSale(){
    this.router.navigate(['sales']);
  }

  getSale(id: number){
    this.dataService.getSale(id)
    .subscribe(
        data => {
          this.sale = data;
          console.log(this.sale);
        }
    )
  }
}