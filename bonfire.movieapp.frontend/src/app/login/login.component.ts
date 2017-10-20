import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../_models/index';
import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent  {
    user: User = new User();
    loading = false;
    errorMessage = '';

    usernameFormControl = new FormControl('', [Validators.required]);
    passwordFormControl = new FormControl('', [Validators.required]);

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    login() {
        if (this.usernameFormControl.valid && this.passwordFormControl.valid) {
            this.loading = true;
            this.authenticationService.login(this.user.username, this.user.password)
                .subscribe(
                    data => {
                        this.router.navigate(['/home']);
                    },
                    error => {
                        this.errorMessage = 'Login Failed.';
                        this.loading = false;
                    });
        }
    }
}
