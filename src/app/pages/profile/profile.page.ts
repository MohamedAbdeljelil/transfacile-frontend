import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import {EditUserPage} from "../../admin-module/pages/edit-user/edit-user.page";
import {ModalController} from "@ionic/angular";
import {EditProfilePage} from "../../admin-module/pages/edit-profile/edit-profile.page";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
     user : User;
    private Token : any;
    private id : number;

    constructor(private router : Router,private authService : AuthentificationService,
                private tokenStorage : TokenStorageService,private modalController : ModalController) {
        this.loadData();
    }

    ngOnInit() {

    }

    logoutButton() {
        this.tokenStorage.signOut();
        this.router.navigate(['/login']);
    }
    loadData(){
        console.log(this.tokenStorage.getUser());
        this.Token=this.tokenStorage.getUser();
        // console.log(this.Token.id)
        this.id=this.Token.id;
        console.log(this.id)
        this.authService.getUserById(this.id).subscribe(
            data => {
                this.user=data;
                console.log(data);
                this.authService.setCurrentUser(this.user);
                console.log(this.authService.currentUser);
            },
            error => {
                console.log(error);
            }
        );
    }

    async openModal(user: User) {

            const modal = await this.modalController.create({
                component: EditUserPage,
                // cssClass : 'stop-modal',
                swipeToClose : true,
                componentProps: {
                    user : user
                    // valueCity : data
                }
            });

            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.role === 'userEdited') {
                    console.log(dataReturned.data);
                    // this.users.push(dataReturned.data);
                    user =dataReturned.data;
                    console.log(user);
                    this.loadData();
                    // alert('Modal Sent Data :'+ dataReturned);
                }
            });
    }
}
