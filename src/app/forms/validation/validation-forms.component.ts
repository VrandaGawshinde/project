import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, MinLengthValidator } from '@angular/forms';

@Component({
    selector: 'app-validation-forms',
    templateUrl: './validation-forms.component.html',
    styleUrls: ['./validation-forms.component.scss']
})

export class ValidationFormsComponent implements OnInit {
    @ViewChild('f', {static: false}) floatingLabelForm: NgForm;
    @ViewChild('vform', {static: false}) validationForm: FormGroup;
    regularForm: FormGroup;

    ngOnInit() {
        this.regularForm = new FormGroup({
            'name': new FormControl(null,[Validators.required]),
            'contact': new FormControl(null,[Validators.required,Validators.minLength(10)]),
            'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
            'city': new FormControl(null,[Validators.required]),
            //'textArea': new FormControl(null, [Validators.required]),
            'radioOption': new FormControl(''),
        }, {updateOn: 'blur'});
    }

    onReactiveFormSubmit() {
        this.regularForm.reset();
    }
    onTemplateFormSubmit() {
        this.floatingLabelForm.reset();
    }
    onCustomFormSubmit() {
        this.validationForm.reset();
    }


}
