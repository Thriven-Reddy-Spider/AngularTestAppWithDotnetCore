import { Component } from '@angular/core';
import { User } from './user'
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.html'
})
export class LoginComponent {
    user = User;

    submitted = false;

    constructor(private userService: UserService, private router: Router) {  }

    onSubmit(inputUser: User) {
        console.log(inputUser);
        console.log("Form Submitted");
        this.submitted = true;

        this.userService.authenticateUser(inputUser)
            .subscribe(u => this.user = u);

        if (this.user.isAuthenticated)
            this.router.navigate(['/profile', this.user.name]);
        //else
            //show error message

    }

    active = true;
    
    get diagnostic() { return JSON.stringify(this.user); }
}
