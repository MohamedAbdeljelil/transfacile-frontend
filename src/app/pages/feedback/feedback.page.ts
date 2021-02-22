import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validationMessage} from "../../shared/validationMessage";
import {formErrors} from "../../shared/formErrors";
import {Utilities} from "../../shared/Utilities";
import {Router} from "@angular/router";
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {TripsService} from "../../services/trips.service";
import {FavoriteTripService} from "../../services/favorite-trip.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AuthentificationService} from "../../services/authentification.service";
import {User} from "../../models/User";
import {FeedbackService} from "../../services/feedback.service";
import {Feedback} from "../../models/Feedback";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  utilities = new Utilities();
  validFeedbackMessages = validationMessage.feedback;
  formFeedbackError = formErrors.feedback;
  feedBackForm: FormGroup;
  defaultDate = new Date().toISOString().slice(0, 10) ;
   private Token : any;
  private id : number;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = 'Echec de l\'envoie';

  // @Input() rating: number ;
  //
  // @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  questions = this.utilities.questions;
  private currentUser: User;


  constructor(private _formBuilder: FormBuilder,private router : Router,private loadCtrl : LoadingController,
              private alertController : AlertController,private alertCtrl : AlertController,
              private feedbackService : FeedbackService,private toastCtrl: ToastController
      ,private tokenStorage: TokenStorageService,private authService : AuthentificationService) {
    this.createFeedBackForm();
  }
  ngOnInit() {

    console.log(this.tokenStorage.getUser());
    this.Token=this.tokenStorage.getUser();
    // console.log(this.Token.id)
    this.id=this.Token.id;
    console.log(this.id);
    this.authService.getUserById(this.id).subscribe(
        data => {
          this.currentUser=data;
          console.log(this.currentUser);
          // this.currentUser=this.user;
        },
        error => {
          console.log(error);
        });
  }
  private createFeedBackForm(){
    this.feedBackForm = this._formBuilder.group({
      subject: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
      emailResponse: ['', [Validators.required, Validators.email]],
      creationDate : [this.defaultDate]
    });
    this.feedBackForm.valueChanges
        .subscribe(data => this.utilities.onValueChanged(data, this.feedBackForm, this.formFeedbackError, this.validFeedbackMessages));
  }


  async onSubmit() {
    console.log(this.feedBackForm.value);
    const loading = await this.loadCtrl.create({message: 'Logging in...'});
    await loading.present();
    this.feedbackService.saveFeedback(this.feedBackForm.value,this.currentUser).subscribe(
        async () => {
          const toast = await this.toastCtrl.create({message: 'Avis envoyé avec succé ', duration: 2000, color: 'success'});
          await toast.present();
          loading.dismiss();
          this.isSuccessful = true;
          // window.location.reload();
          // this.route.navigate(['/'])
        },
        async err => {
          this.errorMessage = err.error.message;
          console.log(this.errorMessage);
          const alert = await this.alertCtrl.create({message: this.errorMessage, buttons: ['OK']});
          loading.dismiss();
          await alert.present();
        }
    );
  }
}
