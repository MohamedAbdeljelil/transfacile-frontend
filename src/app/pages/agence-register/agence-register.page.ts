import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {gouvernorats} from "../../shared/gouvernorats";
import {secteurActivite} from "../../shared/secteurActivite";
import {validationMessage} from "../../shared/validationMessage";
import {formErrors} from "../../shared/formErrors";
import {Utilities} from "../../shared/Utilities";
import {register} from "ts-node";

@Component({
    selector: 'app-agence-register',
    templateUrl: './agence-register.page.html',
    styleUrls: ['./agence-register.page.scss'],
})
export class AgenceRegisterPage implements OnInit {

    utilities = new Utilities();

    validSocRegistMessages = validationMessage.registerSociete;
    formSocRegistErrors = formErrors.registerSociete;
    formContactAgence: FormGroup;
    gouvernoratsTunisie = gouvernorats;
    formAdresseAgence: FormGroup;
    formInformAgence: FormGroup;
    secActivSociete = secteurActivite;
    formJuridique = ['SUARL', 'SARL', 'SA', 'SAS', 'Autre'];
    agenceRegisterForm: any;
    formUserResgister : FormGroup;


    constructor(private _formBuilder: FormBuilder) {
        this.createAgenceForm();
    }

    ngOnInit() {
        this.agenceRegisterForm = this.formInformAgence.value;
        this.agenceRegisterForm;
        console.log(this.agenceRegisterForm);
    }

    private createAgenceForm() {
        this.formInformAgence = this._formBuilder.group({
            nomSociete: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            matriculeFis: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
            NumAffiCnss: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
            secActivite: ['', [Validators.required]],
            formJur: ['', [Validators.required]]
        });

        this.formContactAgence = this._formBuilder.group({
            nomPrenomContact: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            qualite: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
            telContact: ['', [Validators.required, Validators.minLength(8), Validators.pattern("[0-9]*")]],
        });
        this.formAdresseAgence = this._formBuilder.group({
            gouvernorats: ['', [Validators.required]],
            adresse: ['', [Validators.required]],
            local: ['', [Validators.required]],
            codePost: ['', [Validators.minLength(2), Validators.maxLength(25)]],
            tel: ['', [Validators.required, Validators.pattern("[0-9]*")]],
            emailSociete: ['', [Validators.required, Validators.email]],
        });

        this.formContactAgence.valueChanges
            .subscribe(data => this.utilities.onValueChanged(data, this.formContactAgence, this.formSocRegistErrors, this.validSocRegistMessages));
        this.formAdresseAgence.valueChanges
            .subscribe(data => this.utilities.onValueChanged(data, this.formAdresseAgence, this.formSocRegistErrors, this.validSocRegistMessages));
        this.formInformAgence.valueChanges
            .subscribe(data => this.utilities.onValueChanged(data, this.formInformAgence, this.formSocRegistErrors, this.validSocRegistMessages));
    }

    isFormValid() {
        if ((this.formInformAgence.valid && this.formContactAgence.valid && this.formAdresseAgence.valid ))
            return true;
        else
            return false;
    }
    onSubmit() {

        console.log(this.agenceRegisterForm);
    }
}
