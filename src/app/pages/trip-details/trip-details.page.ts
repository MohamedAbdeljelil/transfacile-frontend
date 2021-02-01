import { Router } from '@angular/router';
import { TripsPage } from './../trips/trips.page';
import { Trip } from './../../models/Trip';
import {AlertController, ModalController} from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import {FavoriteTripService} from "../../services/favorite-trip.service";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  @Input() trips: Array<Trip>;
  @Input() trip: Trip;
  isFavorite = false;
  AlertButtonText ="Add";
  idFavorite : number;

  constructor(private modalController: ModalController,private router : Router,
              private alertController : AlertController,
              private favTripService : FavoriteTripService) { }

  ngOnInit() {
    console.log(this.trips);
    console.log(this.trip);
  }
  async closeModal() {
    this.modalController.dismiss();
  }
  getTimeFromString(time): string {
    let timeString = time;
    let minute = timeString.split(':')[1];
    let datetime = new Date('1970-01-01T' + timeString);
    if (timeString.startsWith('0')) {
      if (minute.startsWith('0') && minute.endsWith('0')) {
        return '0' + datetime.getHours() + ':' + datetime.getMinutes() + '0';
      }
      else {
        return '0' + datetime.getHours() + ':' + datetime.getMinutes()
      }
    }
    else{
      if(minute.startsWith('0') && minute.endsWith('0')){
        return  datetime.getHours()+ ':'+datetime.getMinutes()+'0';
      }
    }
    return datetime.getHours() + ':' + datetime.getMinutes();
  }
  getDiffBetweenDepAndArr(timeStart, timeEnd): string {
    let datetimeStart = new Date('1970-01-01T' + timeStart);
    let datetimeEnd = new Date('1970-01-01T' + timeEnd);
    let hourDiff = datetimeEnd.getHours() - datetimeStart.getHours();
    let minuteDiff = datetimeEnd.getMinutes() - datetimeStart.getMinutes();
    if (hourDiff < 0) {
      hourDiff += 24;
    }
    if (minuteDiff < 0) {
      minuteDiff += 60;
      hourDiff-=1;
    }
    return hourDiff + 'h' + minuteDiff + 'm';
  }
  onChargeCheckout(){
    this.modalController.dismiss();
    this.router.navigateByUrl('/checkout');
  }

    async openModal() {
    this.showAlertButtonText(this.isFavorite);
      const alert = await this.alertController.create({
        cssClass : 'alert-style',
        header: 'Favoris ',
        message: 'Voulez vous ajouter ce voyage à vos favoris voyages',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          }, {
            text: this.AlertButtonText,
            handler: () => {
              console.log('Confirm Ok');
              if(this.isFavorite){
                this.favTripService.UnfavouriteTrip(this.trip).then(()=>{
                      this.isFavorite=false;
                })
              }
              else{
                this.favTripService.setTripId(this.idFavorite).then((id : number)=>{
                  this.idFavorite = id;
                  console.log(this.idFavorite);
                  console.log(this.idFavorite);
                  this.trip.trip_id=this.idFavorite;
                  console.log(this.trip);
                });
                console.log(this.trip);
                this.favTripService.favoriteTrip(this.trip).then(()=>{
                        this.isFavorite=true;
                });
              }
            }
          }
          ]
      });
      await alert.present();
    }
    showAlertButtonText(isfavorite : boolean){
  if(isfavorite)
    this.AlertButtonText = "Unfavorite";
  else
    this.AlertButtonText = "Add";
  }

}

