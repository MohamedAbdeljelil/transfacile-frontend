import { TripsService } from './../../services/trips.service';
import {Component, Input, OnInit, Output} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Router} from "@angular/router";
import {StopsModalPage} from "../../modals/stops-modal/stops-modal.page";
import {Bus} from "../../models/Bus";
import {Trip} from "../../models/Trip";
import {BusService} from "../../services/bus.service";
import {TripsPage} from "../trips/trips.page";

@Component({
    selector: 'app-booking',
    templateUrl: './booking.page.html',
    styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

   // Just for using
    depLists :any;
    arrLists : any;
    depTrips =new Array<Bus>();
    arrTrips =new Array<Bus>();
    trip : Trip;
    trips = new Array<Trip>();
    public size=5;
    public currenPage=0;
    public totalPages : number;
    public pages:Array<number>;
    private currentKeyword: string;
    departureReturned  = null;
    arrivalReturned = null;

    departureStop = 'De';
    arrivalStop = 'A';
    myDate: Date = new Date();
    minDate = this.myDate.getDate();
    constructor(private modalController: ModalController,private route : Router,
                private busService : BusService,private tripService : TripsService) {
    }
    ngOnInit() {
        // let timeString = '07:30:30';
        // let minute=timeString.split(':')[1];
        // console.log(minute)
        // let datetime = new Date('1970-01-01T' + timeString );
        // if(timeString.startsWith('0')){
        //   console.log('0' + datetime.getHours()+ ':'+datetime.getMinutes()+'0') ;
        // }
    }


    async openCitiesModal(city,data) {
        const modal = await this.modalController.create({
            component: StopsModalPage,
            cssClass : 'stop-modal',
            swipeToClose : true,
            componentProps: {
                typeCity : city,
                valueCity : data
            }
        });
        modal.onDidDismiss().then((dataReturned) => {
            if (dataReturned.role === 'city') {
                if(city === this.departureStop) {
                this.departureReturned = dataReturned.data.stop_name;
                }
                else {
                    this.arrivalReturned = dataReturned.data.stop_name;
                }
                // alert('Modal Sent Data :'+ dataReturned);
            }
        });

        return await modal.present();


    }


    openTripsModal(depStation,arrStation){
        this.busService.getTripsByStop(depStation).subscribe(
            data => {
                this.depLists=data;
                this.depTrips=[];
                this.depLists.forEach(depTrip=>{
                    this.depTrips.push(depTrip);
                });
                this.busService.getTripsByStop(arrStation).subscribe(
                    data => {
                        this.arrLists=data;
                        this.arrTrips=[];
                        this.arrLists.forEach(arrTrip=>{
                            this.arrTrips.push(arrTrip);
                        });
                        
                        this.fillListTrip(this.depTrips,this.arrTrips);
                        this.trips=[];
                    },
                    err => {
                        console.log(err);
                    });
            },
            err => {
                console.log(err);
            });
            console.log(this.trips);
            this.tripService.setTrips(this.trips);
            this.route.navigateByUrl('/trips');
        // List of Trips for Arr Station

        // const modal = await this.modalController.create({
        //     component: TripsPage,
        //     componentProps: {
        //         Trips : this.trips
        //     }
        // });
        // modal.onDidDismiss().then((dataReturned) => {
        //     if (dataReturned.role === 'trips') {
        //         console.log(dataReturned);
        //         this.trips = dataReturned.data;
        //         // alert('Modal Sent Data :'+ dataReturned);
        //     }
        // });

        // return await modal.present();
    }


    public validSearch(arr,dep){
        if(arr!==null && dep!==null && arr!==dep) {
            return  true;
        }
        return false;
    }
    public  fillListTrip(depTrips , arrTrips){
        let i =0;
        for (const depTrip of depTrips){
            for (const arrTrip of arrTrips){
                if (depTrip.line_no === arrTrip.line_no){
                    if (depTrip.stop_sequence < arrTrip.stop_sequence){

                        this.trip = new Trip(null, depTrip.stop_sequence,
                            depTrip.line_name, depTrip.line_no, depTrip.stop, arrTrip.stop,
                            0, 0, depTrip.dep_time, arrTrip.dep_time,null);
                        this.trips.push(this.trip);
                        console.log(this.trips);

                    }
                    else {
                        this.trip = new Trip(null, depTrip.stop_sequence,
                            depTrip.line_name, depTrip.line_no, depTrip.stop, arrTrip.stop,
                            0, 0, depTrip.arr_time, arrTrip.arr_time,null);
                        this.trips.push(this.trip);
                        console.log(this.trips);
                        i=i+1;
                    }
                }
            }
        }
    }
    
}
