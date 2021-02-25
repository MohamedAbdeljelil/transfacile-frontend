import { Trip } from './../models/Trip';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  public host= "http://localhost:8080/api/test/trip";
  Trips = new Array<Trip>();
  TripsFav = new Array<Trip>();

  constructor(private httpClient: HttpClient) { }
  getTrips(){
    return this.Trips;
  }
  setTrips(data){
    this.Trips=data;
  }

  public getListTrips() :Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(this.host + "/all");
  }

  public getTripById(id : number) :Observable<Trip>{
    return this.httpClient.get<Trip>(this.host + "/"+id);
  }

  public deleteTrip(id :number) {
    return this.httpClient.delete(this.host + "/"+id);
  }

  public saveTrip(data) {
    return this.httpClient.post(this.host, data);
  }

  public updateTrip(id:number,data) {
    return this.httpClient.put(this.host+"/"+id, data);
  }
  getFavTrips(){
    return this.TripsFav;
  }
  setFavTrips(data){
    this.TripsFav=data;
  }



}
