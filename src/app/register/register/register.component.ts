import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, MinLengthValidator } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
    @ViewChild('vform', {static: false}) validationForm: FormGroup;
    regularForm: FormGroup;
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.regularForm = new FormGroup({
            'name': new FormControl(null,[Validators.required]),
            'contact': new FormControl(null,[Validators.required,Validators.minLength(10)]),
            'birthdate': new FormControl(null),
            'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
            'city': new FormControl(null,[Validators.required]),
            'radioOption': new FormControl(null),
        }, {updateOn: 'change'});
    }

    onReactiveFormSubmit() {
        const { name, city, contact, inputEmail, password, birthdate } = this.regularForm.value;
        this.userService.postRegister({mobileNo: contact, password, name, city, email: inputEmail, dob: birthdate}).subscribe((users)=> {console.log(users)});
        this.regularForm.reset();
    }
    
}
