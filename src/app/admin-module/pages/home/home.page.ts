import {Component, OnInit, ViewChild} from '@angular/core';
// import { Router } from '@angular/router';

// @ts-ignore
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-page-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    segment: string;
    page: number;

    constructor(
        // private router: Router,
        private loadingCtrl: LoadingController
    ) {
    }

    ngOnInit() {
        this.onTabSelected('hottest');
    }

    onTabSelected(segmentValue: string) {
        this.segment = segmentValue;
        this.page = 1;
    }

    // onSearch() {
    //   this.router.navigate(['search']);
    // }
    searchTerm: any;


    presentNotifications($event: MouseEvent) {

    }

    goToAccount() {

    }

    searchChanged($event: any) {

    }

    slidesOptions = {
        slidesPerView: 1.5
    }
}
