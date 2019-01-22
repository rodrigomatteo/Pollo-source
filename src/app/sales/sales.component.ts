import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from './../models/sale';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sale: Sale;

  constructor(
    private dataService : DataService,
    private router : Router
  ) { 
    this.sale = new Sale();
  }

  ngOnInit() {
    this.getSale(1);
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