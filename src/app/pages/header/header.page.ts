import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.page.html',
    styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

    constructor(private router: Router, private menuController: MenuController) {
    }

    openFirst() {
        this.menuController.enable(true, 'main-menu');
        this.menuController.open('main-menu');
    }

    ngOnInit() {
    }
}
