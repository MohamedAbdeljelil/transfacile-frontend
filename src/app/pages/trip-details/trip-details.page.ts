import { Router } from '@angular/router';
import { Trip } from './../../models/Trip';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import {FavoriteTripService} from "../../services/favorite-trip.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AuthentificationService} from "../../services/authentification.service";
import {User} from "../../models/User";
import {TripsService} from "../../services/trips.service";
import {element} from "protractor";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  @Input() trips: Array<Trip>;
  @Input() trip: Trip;
  isFavorite = false;
  alertButtonText ="Add";
  alertTextMessage = "Voulez vous ajouter ce voyage à vos favoris";
  idFavorite : number;
  favTrips : Trip[] = [];
  unFavTrip : Trip;
  users : User[];
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

    console.log(this.tokenStorage.getUser());
    this.Token=this.tokenStorage.getUser();
    // console.log(this.Token.id)
    this.id=this.Token.id;
    console.log(this.id);
    this.authService.getUserById(this.id).subscribe(
        data => {
          this.currentUser=data;
          // this.currentUser=this.user;
        },
        error => {
          console.log(error);
        }
    );
    this.tripService.getListTrips().subscribe((results : Trip[])=>{
          this.listTrips=results;
      console.log(this.listTrips);
      this.isInTripFav(this.trip);
      if(this.isFavorite){
        this.unFavTrip=this.isTripExistInDB(this.trip);
        this.users=this.unFavTrip.users;
        console.log(this.users);
      }
          console.log(this.isFavorite);
    });


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
    this.showAlertText(this.isFavorite);
      const alert = await this.alertController.create({
        cssClass : 'alert-style',
        header: 'Favoris ',
        message: this.alertTextMessage,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          }, {
            text: this.alertButtonText,
            handler: () => {
              console.log('Confirm Ok');
              if(this.isFavorite){
                if(this.unFavTrip!==null){
                  // console.log(this.users);
                  this.unFavTrip.heure_dep = '1968-11-16T'+ this.unFavTrip.heure_dep;
                  this.unFavTrip.heure_arriv = '1968-11-16T'+ this.unFavTrip.heure_arriv;
                  this.unFavTrip.users=this.users;
                  console.log(this.unFavTrip);
                  this.unfovariteTrip(this.unFavTrip);
                  this.isFavorite=false;
                }
              }
              else{

                let tripFav = new Trip(null, this.trip.nb_stop,
                    this.trip.route_name, this.trip.route_num,this.trip.depStation, this.trip.arrStation,
                    0, 0, this.trip.heure_dep, this.trip.heure_arriv,[]);
                
                // let newDate = new Date(dateString);
                if(this.isTripExistInDB(this.trip)!==null){
                  tripFav = this.isTripExistInDB(this.trip);
                  console.log(tripFav);
                  tripFav.heure_dep = '1968-11-16T'+ tripFav.heure_dep;
                  tripFav.heure_arriv = '1968-11-16T'+ tripFav.heure_arriv;
                  tripFav.users.push(this.currentUser);
                  this.tripService.updateTrip(tripFav.trip_id,tripFav).subscribe(()=>{
                    this.isFavorite=true;
                  });
                }
                else {
                  tripFav.heure_dep = '1968-11-16T'+ tripFav.heure_dep;
                  tripFav.heure_arriv = '1968-11-16T'+ tripFav.heure_arriv;
                  tripFav.users.push(this.currentUser);
                  this.tripService.saveTrip(tripFav).subscribe(()=>{
                    this.isFavorite=true;
                  });
                }
                    this.tripService.getFavTrips().push(tripFav);
                console.log(this.tripService.getFavTrips());
              }
            }
          }
          ]
      });
      await alert.present();
    }
    showAlertText(isfavorite : boolean){
  if(isfavorite){
    this.alertButtonText = "Unfavorite";
    this.alertTextMessage="Voulez vous supprimer ce voyage de vos favoris";
  }
}
  isInTripFav(trip : Trip) {
    // let toKeepTrips :Trip[]=[];
    if(this.isTripExistInDB(trip)!==null){
      const tripFav=this.isTripExistInDB(trip);

      if(tripFav.users!==null){
        tripFav.users.forEach(user=>{
          if(user.username===this.currentUser.username){
            this.isFavorite=true;
          }
        });
      }
    }
    return false;
  }


  isTripExistInDB(trip:Trip) : Trip{
    if(this.listTrips){
      console.log(this.listTrips);
      for(let element of this.listTrips){

        if (element.depStation === trip.depStation && element.arrStation === trip.arrStation
        && element.route_num ===trip.route_num){
          console.log(element);
          return element;
        }
      }
    }
    return null;
  }
  unfovariteTrip(trip:Trip){
    let listUsersToKeep : User[]=[];
    console.log(trip.users);
    let users = trip.users;
    let index=-1;
    console.log(this.currentUser);
    for(let i=0;i<users.length;i++){
      if(users[i].username===this.currentUser.username){
          index=i;
      }
    }
    // let indexUser = trip.users.indexOf(this.currentUser);
    console.log(index);
    listUsersToKeep=users;
    if(index!==-1){
     listUsersToKeep.splice(index,1);
    }
    console.log(listUsersToKeep);
    trip.users=listUsersToKeep;
    console.log(trip.users);
    console.log(trip);
    this.tripService.updateTrip(trip.trip_id,trip).subscribe((res)=>{
     console.log(res);
    });
  }

}

