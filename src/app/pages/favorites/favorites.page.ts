import { Component, OnInit } from '@angular/core';
import {Trip} from "../../models/Trip";
import {User} from "../../models/User";
import {AlertController, LoadingController, ModalController, Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {TripsService} from "../../services/trips.service";
import {FavoriteTripService} from "../../services/favorite-trip.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {AuthentificationService} from "../../services/authentification.service";
import {element} from "protractor";
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  step = 0;
  unFavTrip : Trip;
  users : User[];
  isFavorite = false;
  private currentUser : User;
  private Token : any;
  private id : number;
  private listTrips : Trip[];
  private listFavTrips : Trip[]=[];

  constructor(private modalController: ModalController,private router : Router,private loadCtrl : LoadingController,
              private alertController : AlertController,private tripService : TripsService,
              private favTripService : FavoriteTripService
      ,private tokenStorage: TokenStorageService,private authService : AuthentificationService) {

  }

  ngOnInit() {
    // console.log(this.trips);
    // console.log(this.trip);
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
    this.loadFavTrips();

    // this.refresh();
console.log(this.tripService.getFavTrips());


  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {

    this.step++;
  }

  prevStep() {
    this.step--;
  }
  steps = [
    {
      titre :'Rechercher',
      paragraph : 'Rechercher les voyages selon votre iterinaire a partir de la page d\'acceuil',
      icon : '../../../assets/img/step1.png'
    },
    {
      titre :'Selectionner',
      paragraph : 'Selectionner le voyage qui vous convient parmi la liste ',
      icon : '../../../assets/img/step2.png'
    },
    {
      titre :'Ajouter un favoris',
      paragraph : 'Ajouter le voyage selectionne a vos favoris',
      icon : '../../../assets/img/step3.png'
    }
  ]

  unfovariteTrip(trip:Trip){

    console.log(trip);
    let index=-1;
    for(let i=0;i<trip.users.length;i++){
        if(trip.users[i].username===this.currentUser.username){
          index=i;
        }
      }
    console.log(index);
    if(index!==-1){
        trip.users.splice(index,1);
      }
    trip.heure_dep = '1968-11-16T'+ trip.heure_dep;
    trip.heure_arriv = '1968-11-16T'+ trip.heure_arriv;
    // let listUsersToKeep : User[]=[];
    // console.log(trip.users);
    // let users = trip.users;
    // let index=-1;
    // console.log(this.currentUser);
    // for(let i=0;i<users.length;i++){
    //   if(users[i].username===this.currentUser.username){
    //     index=i;
    //   }
    // }
    // let indexUser = trip.users.indexOf(this.currentUser);
    // console.log(index);
    // listUsersToKeep=users;
    // if(index!==-1){
    //   listUsersToKeep.splice(index,1);
    // }
    // console.log(listUsersToKeep);
    // trip.users=listUsersToKeep;
    // console.log(trip.users);
    // console.log(trip);
    this.tripService.updateTrip(trip.trip_id,trip).subscribe((res)=>{
      console.log(res);
    });
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
  loadFavTrips(){
    this.presentLoading();
    this.tripService.getListTrips().subscribe((results : Trip[])=>{
      this.listTrips=results;
      console.log(this.listFavTrips);
      console.log(this.listTrips);
      this.listTrips.forEach(element=>{
        for(let i=0;i<element.users.length;i++){
          if((element.users)[i].username===this.currentUser.username){
            this.listFavTrips.push(element);
            // this.tripService.setFavTrips(this.listFavTrips);
            // console.log(this.tripService.getFavTrips());
          }
        }
      });
      this.stopLoader();
      // return this.listFavTrips;
      // console.log(this.listFavTrips);
      // this.isInTripFav(this.trip);
      // if(this.isFavorite){
      //   this.unFavTrip=this.isTripExistInDB(this.trip);
      //   this.users=this.unFavTrip.users;
      //   console.log(this.users);
      // }
      // console.log(this.isFavorite);
    });
  }
  async presentLoading() :Promise<any>{
    const loading = await this.loadCtrl.create({
      cssClass: 'loading-css',
      message: 'Please wait...',
      backdropDismiss: true,
      duration: 2000,
      translucent: true,
    });
    return await loading.present();
  }
  async stopLoader() {
    await this.loadCtrl.dismiss();
  }
  refresh(): void {
    window.location.reload();
  }
  async deleteFav(trip,index) {
    const alert = await this.alertController.create({
      cssClass: 'alert-style',
      header: 'Favoris ',
      message: "Voulez vous supprimer ce voyage de vos favoris",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: "Ok",
          handler: () => {
            console.log('Confirm Ok');
                // console.log(this.users);
            this.listFavTrips.forEach(e=>{
              if(e.trip_id===trip.trip_id){
                this.listFavTrips.splice(index,1);
              }
            });
            this.listTrips.forEach(element=>{
              if(element.trip_id===trip.trip_id){
                console.log(element);
                this.unfovariteTrip(element);
                // window.location.reload();
              }
            });

          }
        }
      ]
    });
    await alert.present();
  }

}
