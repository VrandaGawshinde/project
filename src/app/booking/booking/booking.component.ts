import { Component, OnInit , ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, MinLengthValidator } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
  @ViewChild('vform', {static: false}) validationForm: FormGroup;
  regularForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.regularForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'members': new FormControl(null, [Validators.required]),
      'contact': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'date': new FormControl(null, [Validators.required]),
      'time': new FormControl(null, [Validators.required]),
  }, {updateOn: 'change'});
  }
  onReactiveFormSubmit() {
    const { name, contact, date, time, members } = this.regularForm.value;
    this.userService.postReservation({ name, mobileNo: contact, date, time, members}).subscribe((users)=> {console.log(users)});
    this.regularForm.reset();
  }

}
