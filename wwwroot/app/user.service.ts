import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user'

@Injectable()
export class UserService {
    user: User;
    constructor(private http: Http) { }
    getUserProfile(name: string): Observable<User> {
        let userDat = this.http
            .get('Home/UserProfile?name=' + name)
            .map(response => response.json())
            .catch(this.handleError);
        return userDat;
    }

    //private headers = new Headers({ 'Content-Type': 'application/json' });
    authenticateUser(loginUser: User): Observable<User> {
        let userDat = this.http
            .post('Home/Authenticate', JSON.stringify(loginUser)//, { headers: this.headers }
            )
            .map(response => response.json())
            .catch(this.handleError);
        return userDat;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}