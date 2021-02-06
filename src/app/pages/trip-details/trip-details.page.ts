import { Router } from '@angular/router';
import { TripsPage } from './../trips/trips.page';
import { Trip } from './../../models/Trip';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import {FavoriteTripService} from "../../services/favorite-trip.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AuthentificationService} from "../../services/authentification.service";
import {User} from "../../models/User";
import {TripsService} from "../../services/trips.service";

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
  favTrips : Trip[] = [];
  unFavTrip : Trip;
  // private currentuUer : any;
  private currentUser : User;
  private Token : any;
  private id : number;
  private listTrips : Trip[];

  constructor(private modalController: ModalController,private router : Router,
              private alertController : AlertController,private tripService : TripsService,
              private favTripService : FavoriteTripService,private plateform : Platform
  ,private tokenStorage: TokenStorageService,private authService : AuthentificationService) {
                this.plateform.ready().then(()=>{
                  // this.loadFavTrips();
                  // this.loadIdFavrTrips();

                });
               }

  ngOnInit() {
    console.log(this.trips);
    console.log(this.trip);
    this.tripService.getListTrips().subscribe((results)=>{
      this.listTrips = results;
      console.log(this.listTrips);
    })
    console.log(this.tokenStorage.getUser());
    this.Token=this.tokenStorage.getUser();
    // console.log(this.Token.id)
    this.id=this.Token.id;
    console.log(this.id);
    this.authService.getUserById(this.id).subscribe(
        data => {
          this.currentUser=data;
          console.log(data);
          this.isFavorite = this.isInTripFav(this.trip);
          // this.currentUser=this.user;
        },
        error => {
          console.log(error);
        }
    );
  }

  // loadFavTrips(){
  //   this.favTripService.getAllFavouriteTrips().then((results)=>{
  //     this.favTrips = results;
  //   });
  // }
  // loadIdFavrTrips(){
  //   this.favTripService.getAllIdFavouriteTrips().then((ids)=>{
  //     this.idFavorite = ids;
  //     console.log(this.idFavorite);
  //   });
  // }
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
                this.unFavTrip = this.isTripExistInDB(this.trip);
                if(this.unFavTrip!==null){
                  this.unfovariteTrip(this.isTripExistInDB(this.unFavTrip));
                  this.isFavorite=false;
                }
              }
              else{
                console.log(this.trip);
                if(this.trip.users){
                  this.trip.users= new Array<User>();
                  this.trip.users.push(this.currentUser);
                }
                this.tripService.saveTrip(this.trip).subscribe(()=>{
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
  isInTripFav(trip : Trip) {
    // let toKeepTrips :Trip[]=[];
    if(this.isTripExistInDB(trip)!==null){
      if(trip.users!==null && trip.users.indexOf(this.currentUser)!==-1){
              return true;
      }
    }
    return false;
  }


  isTripExistInDB(trip) : Trip{
    if(this.listTrips){
      for (let element of this.listTrips) {
        if (element.depStation === trip.depStation && element.arrStation === trip.arrStation
            && element.heure_dep === trip.heure_dep && element.heure_arriv === trip.heure_arriv){
          return element;
        }
      }
    }
    return null;
  }
  unfovariteTrip(trip:Trip){
    let listUsersToKeep : User[]=[];
    let indexUser = trip.users.indexOf(this.currentUser);
    if(indexUser!==-1){
      listUsersToKeep.slice(0,indexUser);
      console.log(listUsersToKeep);
      listUsersToKeep.slice(indexUser+1,trip.users.length);
    }
    trip.users=listUsersToKeep;
    console.log(trip.users);
    this.tripService.updateTrip(trip.trip_id,trip).subscribe((res)=>{
      console.log(res);
    });
  }

}

