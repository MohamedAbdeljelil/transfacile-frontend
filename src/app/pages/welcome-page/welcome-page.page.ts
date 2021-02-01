import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {

  @ViewChild('mainSlides', {static : true}) slides : IonSlides
  constructor(private router : Router) { }

  ngOnInit() {
  }

    skipbtn() {
        console.log('I will go');
        this.router.navigateByUrl('/login');
    }

  backbtn() {
        this.slides.slidePrev();
  }

    async goNext() {
      if (await this.slides.getActiveIndex() === 2) {
        this.router.navigateByUrl('/login');
      } else {
        this.slides.slideNext();
      }
    }

  async hideBackbtn() {
    if (await this.slides.getActiveIndex() === 0) {
      return true;
    } else {
      return false;
    }
  }
}
