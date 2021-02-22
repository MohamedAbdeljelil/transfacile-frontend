import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, ToastController} from "@ionic/angular";
import {FeedbackService} from "../../services/feedback.service";
import {Feedback} from "../../models/Feedback";
import {AuthentificationService} from "../../services/authentification.service";
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";

@Component({
    selector: 'app-forum',
    templateUrl: './forum.page.html',
    styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

    private i=2;
    private j=1;
    feedbacks : Feedback[];
    users : User[];
    constructor(private loadCtrl : LoadingController,
                private alertController : AlertController,private alertCtrl : AlertController,
                private feedbackService : FeedbackService,private toastCtrl: ToastController,
                private authService : AuthentificationService,private userService : UsersService) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(res=>{
                    this.users=res;
        });
        // this.feedbackService.getFeedbacks().subscribe(res=>{
        //     this.feedbacks=res;
        // });
    }

    onClick() {
        console.log('OK');
    }

    UnlikeFeedBack() {

    }

    likeFeedBack() {

    }
    getFeedback(user : User) : Feedback[]{
        return user.feedbacks;
    }

}
