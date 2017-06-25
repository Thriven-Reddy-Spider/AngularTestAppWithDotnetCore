import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Injectable } from '@angular/core';
//import { Headers,Http } from '@angular/http';

//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

//import {User} from './user'

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {
    
    name = 'Guest'; 
    isAuthenticated = false;
    //user: User;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.navigate(['/login']);
    }
}
 