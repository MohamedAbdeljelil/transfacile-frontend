import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";
import {formErrors} from "../../shared/formErrors";
import {validationMessage} from "../../shared/validationMessage";
import {Utilities} from "../../shared/Utilities";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    @ViewChild('fform') registerFormDirective;
    registerForm: FormGroup;
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    formRegisterErrors = formErrors.register;
    validationRegisterMessages = validationMessage.register;
    utilities = new Utilities();

    defaultDate: "1920-01-01";
    segmentModel: string;
    optionModel: string;


    constructor(private formBuilder: FormBuilder,
                private route: Router,
                private  authentificationService: AuthentificationService,
                private toastCtrl: ToastController,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
    ) {
        this.createPassagerForm();
    }

    ngOnInit(): void {
        this.segmentModel = 'user';
        this.optionModel = '';
    }

    private createPassagerForm() {
        this.registerForm = this.formBuilder.group({
            nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(35)]],
            email: ['', [Validators.required, Validators.email]],
            enable: true,
            dateNaiss: [this.defaultDate],
            telephone: ['', [Validators.required]],
            photosProfil: "",
            fonction: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
            language : "fr",
            roles: "passager",
        });
        this.registerForm.valueChanges
            .subscribe(data => this.utilities.onValueChanged(data, this.registerForm, this.formRegisterErrors, this.validationRegisterMessages));
    }

    async onSubmit() {
        console.log(this.registerForm);
        const loading = await this.loadingCtrl.create({ message: 'Logging in...' });
        await loading.present();
        this.authentificationService.register(this.registerForm.value).subscribe(
            async () => {
                const toast = await this.toastCtrl.create({ message: 'User Created ', duration: 2000, color: 'success' });
                await toast.present();
                loading.dismiss();
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.route.navigate(['/'])
            },
            async err => {
                this.errorMessage = err.error.message;
                console.log(this.errorMessage);
                const alert = await this.alertCtrl.create({ message: this.errorMessage, buttons: ['OK'] });
                loading.dismiss();
                await alert.present();
                this.isSignUpFailed = true;
            }
        );
    }

    getDate(e) {
        let date = new Date(e.target.value).toISOString().substring(0, 10);
        this.registerForm.get('dateNaiss').setValue(date, {
            onlyself: true
        })
    }

    segmentChanged(e: any) {
        console.log('Segment changed', e);
        console.log(this.segmentModel);
    }

    optionChanged(e: any) {
        console.log('Option changed', e);
    }
}

