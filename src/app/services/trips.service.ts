import { Trip } from './../models/Trip';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  Trips = new Array<Trip>();
  constructor() { }
  getTrips(){
    return this.Trips;
  }
  setTrips(data){
    this.Trips=data;
  }
}
