import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  newSales(){
    this.router.navigate(['sales/new']);
  }
}
