import { Router } from '@angular/router';
import { TripsService } from './../../services/trips.service';
import { Trip } from './../../models/Trip';
import { TripDetailsPage } from './../trip-details/trip-details.page';
import {Component, Input, OnInit} from '@angular/core';
import {BusService} from "../../services/bus.service";
import {Bus} from "../../models/Bus";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  trips =new Array<Trip>();


  tripRes =new Array<Bus>();
  constructor(private busService : BusService,private modalController : ModalController,private tripsSerice : TripsService,
    private route : Router) { }

  ngOnInit() {
    this.trips = this.tripsSerice.getTrips();
    this.trips.sort();
    console.log(this.trips);
    // this.fillListTrip(this.depListTrip,this.arrListTrip);
    //List of Trip for Dep Station
   

  }
   async goToDetails(item){
    const modal = await this.modalController.create({
      component: TripDetailsPage,
      componentProps: {
          trip : item,
          trips : this.trips
      }
  });
  return await modal.present();
  }
  getTimeFromString(time) : string{
    let timeString = time;
    let minute=timeString.split(':')[1];  
      let datetime = new Date('1970-01-01T' + timeString );
    if(timeString.startsWith('0')){
      if(minute.startsWith('0') && minute.endsWith('0')){
        return '0' + datetime.getHours()+ ':'+datetime.getMinutes()+'0';
      }
      else{
        return '0' + datetime.getHours()+ ':'+datetime.getMinutes()
      }
    }
    else{
      if(minute.startsWith('0') && minute.endsWith('0')){
        return  datetime.getHours()+ ':'+datetime.getMinutes()+'0';
      }
    }
    return datetime.getHours()+ ':' +datetime.getMinutes();
}
    
}
