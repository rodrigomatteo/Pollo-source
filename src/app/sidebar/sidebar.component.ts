import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateService } from '../authenticate.service'
import { User } from '../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  router: string;
  currentUser: User;

  constructor(
        private _router: Router,
        private authenticationService: AuthenticateService
  ) 
  {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }
}