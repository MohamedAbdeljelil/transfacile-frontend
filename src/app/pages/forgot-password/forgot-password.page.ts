import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

    @ViewChild('fform') forgotPasswordFormDirective;
    forgotPasswordForm: FormGroup;
    formErrors = {
        'email': ''
    };

    validationMessages = {
        'email': {
            'required': 'Email is required.',
            'email': 'Email not in valid format.'
        }
    }

    constructor(private formBuilder: FormBuilder, private route: Router) {
        this.createForm();
    }

    ngOnInit(): void {
    }

    private createForm() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
        this.forgotPasswordForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now

    }

    onValueChanged(data?: any) {
        if (!this.forgotPasswordForm) {
            return;
        }
        const form = this.forgotPasswordForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    onSubmit() {
        console.log(this.forgotPasswordForm);

        this.forgotPasswordForm.reset({
            password: '',
            email: ''
        });
    }
}
