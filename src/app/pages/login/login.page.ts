import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../services/authentification.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {formErrors} from "../../shared/formErrors";
import {validationMessage} from "../../shared/validationMessage";
import {Utilities} from "../../shared/Utilities";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    @ViewChild('fform') loginFormDirective;
    loginForm: FormGroup;
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    formLoginErrors = formErrors.login;
    validationLoginMessage = validationMessage.login;
    utilities = new Utilities();

    roles: string[] = [];

    constructor(private formBuilder: FormBuilder, private route: Router,
                private authentificationService: AuthentificationService,
                private tokenStorage: TokenStorageService,
                private loadingCtrl: LoadingController,
                private translate: TranslateService,
    ) {
        this.createForm();
          
    }

    ngOnInit(): void {

    }

    private createForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
        });
        this.loginForm.valueChanges
            .subscribe(data => this.utilities.onValueChanged(data, this.loginForm, this.formLoginErrors, this.validationLoginMessage));
    }

Language(p){
 p =='fr'?this.translate.use('fr'):this.translate.use('en');
}
    async onSubmit() {
        console.log(this.loginForm);
        const loading = await this.loadingCtrl.create({ message: 'Logging in...' });
        await loading.present();
        this.authentificationService.login(this.loginForm.value).subscribe( async data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                loading.dismiss();
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
                this.route.navigateByUrl('/tabs/booking');
            },
             err => {
                this.errorMessage = err.error.message;
                console.log(this.errorMessage);

                loading.dismiss();
                this.isLoginFailed = true;
            }
        );
    }

    forgotPwdPage() {
        this.route.navigateByUrl('/forgot-password');
    }

    registerPage() {
        this.route.navigateByUrl('/register');
    }

    reloadPage() {
        window.location.reload();
    }
}
