import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import  { User } from '../_models/index';

@Injectable()
export class AuthenticationService {
    private _isAuthorized: boolean = false;
    private _userData: User;

    constructor(private http: Http) { }

    isUserAuthorized(): boolean {
        this._isAuthorized = false;
        this._userData = JSON.parse(localStorage.getItem('user'));

        if (this._userData) {
            this._isAuthorized = true;
        }

        return this._isAuthorized;
    }

    getUser(): User {
        return this._userData;
    }

    getUserId(): number {
        return this._userData.id;
    }

    login(username: string, password: string) {
        return this.http.post('http://localhost:3000/api/users/login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                let data = response.json();

                if (data && data.token) {
                    localStorage.setItem('user', JSON.stringify(data.user));
                }

                return data;
            });
    }

    logout() {
        this._isAuthorized = false;
        localStorage.removeItem('user');
    }
}
