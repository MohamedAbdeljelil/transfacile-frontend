import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {UsersService} from "../../services/users.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    private User : any;
    private Token : any;
    private id : number;
    constructor(private tokenStorage: TokenStorageService,
                private authService : AuthentificationService) {
    }

    ngOnInit() {
        console.log(this.tokenStorage.getUser());
        this.Token=this.tokenStorage.getUser();
        // console.log(this.Token.id)
        this.id=this.Token.id;
        console.log(this.id)
        this.authService.getUserById(this.id).subscribe(
            data => {
                this.User=data;
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

}
