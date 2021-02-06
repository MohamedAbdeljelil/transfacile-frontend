import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
import {MenuController} from "@ionic/angular";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    activePath = '';
    pages = [
        {
            name: 'Home',
            path: '/tabs/booking',
            iconame: "home-outline"
        },
        {
            name: 'A propos TechnoGM',
            path: '/aboutus',
            iconame: "information-circle-outline"
        },
        {
            name: 'TransFacile',
            path: '/about-trans-facile',
            iconame: "apps-outline"
        },
        {
            name: 'Avis',
            path: '/rating',
            iconame: "paper-plane-outline"
        },
        {
            name: 'Forum',
            path: '/forum',
            iconame: "chatbubbles-outline"
        },
        {
            name: 'Contact us',
            path: '/contactus',
            iconame: "people-circle-outline"
        }
    ]

    constructor(private router : Router, private menuController: MenuController) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.activePath = event.url
        })
    }

    ngOnInit() {
    }


    logoutButton() {
        this.menuController.isOpen("menu-content").then(()=>{

        });

    }
}
