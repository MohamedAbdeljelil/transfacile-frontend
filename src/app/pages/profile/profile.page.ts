import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    private user : User;
    private Token : any;
    private id : number;

    constructor(private router : Router,private authService : AuthentificationService,private tokenStorage : TokenStorageService) {
    }

    ngOnInit() {
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

    logoutButton() {
        this.tokenStorage.signOut();
        this.router.navigate(['/login']);
    }
}
