import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './_models/index';
import { UserService } from './_services/index';
import { AuthenticationService } from './_services/index';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUser: User;
  isUserAuthorized: boolean = false;

  constructor(private router: Router, private userService: UserService,
              private authenticationService: AuthenticationService) {
    this.router.events.subscribe(() => {
      this.isUserAuthorized = this.authenticationService.isUserAuthorized();
      if (this.isUserAuthorized) {
        this.currentUser = this.authenticationService.getUser();
      }
    });
  }

  logout() {
    this.authenticationService.logout();

    this.currentUser = null;

    this.router.navigate(['/login']);
  }
}

