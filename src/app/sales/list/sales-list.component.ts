import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from './../../models/sale';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  sales: Sale[];

  constructor(
    private dataService : DataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.dataService.getAllSales()
    .subscribe(
        data => {
          this.sales = data;
          console.log(this.sales);
        }
    )
  }

  newSales(){
    this.router.navigate(['sales/new']);
  }
}
