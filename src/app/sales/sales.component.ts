import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from './../models/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getAllSales()
    .subscribe(
        data => {
          this.sales = data;
          console.log(this.sales);
        }
    )
}

}