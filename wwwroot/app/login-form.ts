import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from './user'

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.html'
})
export class LoginComponent {
    user = new User('', true, '', '');

    submitted = false;

    constructor(private userService: UserService, private router: Router) { }

    onSubmit(inputUser: User) {
        console.log(inputUser);
        console.log("Form Submitted");
        
        this.userService.authenticateUser(inputUser)
            .subscribe(u => this.onAuthentication(u));
    }

    onAuthentication(data : any) {
        this.user = data;

        debugger;
        if (this.user.isAuthenticated) {
            this.submitted = true;
            this.router.navigate(['/profile', this.user.name]);
        } else
            return;
    }
}
