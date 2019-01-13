import { Component } from '@angular/core';

import { AuthenticateService } from './authenticate.service'
import { User } from './models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentUser: User;

  constructor(
      private authenticationService: AuthenticateService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

}
