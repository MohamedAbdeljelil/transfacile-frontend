import {Component, Input, OnInit} from '@angular/core';
import {LoadingController, ModalController, NavController} from "@ionic/angular";
import {StopService} from "../../services/stop.service";
import {from} from "rxjs";

@Component({
  selector: 'app-stops-modal',
  templateUrl: './stops-modal.page.html',
  styleUrls: ['./stops-modal.page.scss'],
})
export class StopsModalPage implements OnInit {



  defaultsearch = 'Gouvernorats,Station, etc.';
  stops :any;
  stopsRes : any;
  @Input() typeCity : string;
  @Input() valueCity : string;
  cityName : string;
  err : string;
  isShown =true;
  constructor(private modalController : ModalController,private nav : NavController,
  private loadingController: LoadingController,private stopService : StopService) {
  }


  ngOnInit() {

    this.presentLoading();
    this.stopService.getStopes().subscribe(
        data => {
          this.stops=data;
          this.InitialiseCities();
          this.stopLoader();
        },
        error => {
          console.log(error);
          this.err=error;
        },

    )
  }
  InitialiseCities(){
    this.stopsRes=this.stops;
  }
  onSearchChange(event: any) {
    this.InitialiseCities();
    const val = event.target.value;
    if (val && val.trim() !== '') {
      this.stopsRes = this.stopsRes.filter(item => {
        return (item.stop_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  async goToBookingPage(item: string) {
    this.cityName = item;
    await this.modalController.dismiss(this.cityName,'city');
  }

  closeModal() {
    this.modalController.dismiss(null , 'cancel');
  }

  async presentLoading() :Promise<any>{
    const loading = await this.loadingController.create({
      cssClass: 'loading-css',
      message: 'Please wait...',
      backdropDismiss: true,
      duration: 2000,
      translucent: true,
    });
    return await loading.present();
  }
  async stopLoader() {
    await this.loadingController.dismiss();
  }
}
