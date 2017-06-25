import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { User } from './user'
import { UserService } from './user.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute, private userService : UserService) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.userService.getUserProfile(params['name']))
            .subscribe(u => this.user = u);
    }
}
 