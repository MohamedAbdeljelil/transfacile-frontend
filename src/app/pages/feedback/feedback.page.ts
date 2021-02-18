import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validationMessage} from "../../shared/validationMessage";
import {formErrors} from "../../shared/formErrors";
import {Utilities} from "../../shared/Utilities";


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
  // @Input() rating: number ;
  //
  // @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  questions = this.utilities.questions;


  constructor(private _formBuilder: FormBuilder) {
    this.createFeedBackForm();
  }
  ngOnInit() {
  }
  private createFeedBackForm(){
    this.feedBackForm = this._formBuilder.group({
      question: ['', [Validators.required]],
      message: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.feedBackForm.valueChanges
        .subscribe(data => this.utilities.onValueChanged(data, this.feedBackForm, this.formFeedbackError, this.validFeedbackMessages));
  }





}
