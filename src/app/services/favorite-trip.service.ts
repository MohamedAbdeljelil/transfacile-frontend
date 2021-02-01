import { Injectable } from '@angular/core';
import {Trip} from "../models/Trip";
const TRIPS_KEY = 'favoriteStations';
const TRIP_KEY_ID = 'trip_id';
@Injectable({
  providedIn: 'root'
})
export class FavoriteTripService {
  id =0;
  //récupérer une instance de storage pour injection de dépendance
  constructor(private storage: Storage) { }
  //retourner une promesse contenant le tableau des IDs des avoris
  getAllFavouriteTrips() : Promise<Trip[]>{
    return this.storage.get(TRIPS_KEY);
  }
  //retourne un boolean  verifier un station est parmis les favoris
  //then est associé à des promesse donc il faut pas mettre boolean le type de retour
  isFavourite(trip : Trip) {
    return this.storage.get(TRIPS_KEY).then(result => {
      return result && result.indexOf(trip) !== -1;
    });
  }
  favoriteTrip(trip : Trip) :Promise<any>{
    return this.storage.get(TRIPS_KEY).then((trips :Trip[]) => {
        if (trips) {
          trips.push(trip);
          return this.storage.set(TRIPS_KEY, trips);
        }
        else {
          return this.storage.set(TRIPS_KEY, [trip]);
        }
      });
  }

  UnfavouriteTrip(trip : Trip) : Promise<Trip>{
    return this.storage.get(TRIPS_KEY).then((trips : Trip[]) => {
      if(!trips || trips.length===0){
        return null;
      }
     let toKeepTrips : Trip[] = [];
      for(let element of trips){
        if(element.trip_id !== trip.trip_id){
          toKeepTrips.push(element);
        }
      }
    });
  }
  setTripId(idTrip : number) : Promise<any>{
    return this.storage.get(TRIP_KEY_ID).then((id : number)=>{
      if(id){
        idTrip = id;
        id++;
      }
      else
        this.storage.set(TRIP_KEY_ID,0);
    });
  }

}
