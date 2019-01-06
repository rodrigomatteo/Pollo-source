import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticateService } from '../authenticate.service'
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser: User;
 
  constructor(
        private router: Router,
        private authenticationService: AuthenticateService
  ) 
  {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

}