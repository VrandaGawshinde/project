import { Component, OnInit , ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, MinLengthValidator } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
  @ViewChild('vform', {static: false}) validationForm: FormGroup;
  regularForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.regularForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.required]),
      'contact': new FormControl(null, [Validators.required, Validators.minLength(10) , Validators.maxLength(10)]),
      'feedback': new FormControl(null, [Validators.required]),
  }, {updateOn: 'change'});
  }
  onReactiveFormSubmit() {
    const {email, name, contact, feedback} = this.regularForm.value;
    this.userService.postFeedback({email, name, mobileNo: contact, comment: feedback}).subscribe((users)=> {console.log(users)});
    this.regularForm.reset();

  }

}
