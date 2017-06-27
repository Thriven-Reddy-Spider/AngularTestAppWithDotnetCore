import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import { UserService } from './user.service';
import {LoginComponent} from './login-form';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'index', component: AppComponent },
    { path: 'profile/:name', component: ProfileComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule],
    declarations: [AppComponent, ProfileComponent, LoginComponent],
    providers: [UserService],
    bootstrap: [AppComponent ]
})
export class AppModule { }
