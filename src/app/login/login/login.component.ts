import { Component, OnInit , ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, MinLengthValidator } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
    @ViewChild('vform', {static: false}) validationForm: FormGroup;
    regularForm: FormGroup;
    isError: boolean = false;
    constructor(private userService: UserService, private router: Router) {}
    ngOnInit() {
        this.regularForm = new FormGroup({
            'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
        }, {updateOn: 'change'});
    }

    onReactiveFormSubmit() {
        const {inputEmail, password} = this.regularForm.value;
        this.userService.postLogin({email: inputEmail,password}).subscribe((user)=> {
            if(typeof(user) === 'object') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('user', JSON.stringify(user));
                this.router.navigate(['dashboard/dashboard1']);
            }
            else {
                this.isError = true;
            }
        });
        this.regularForm.reset();
    }

   

}
