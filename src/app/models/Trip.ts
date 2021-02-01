export class Trip{
    public trip_id : number;
    public nb_stop : number;
    public route_name : string;
    public route_num : number;
    public depStation : string;
    public arrStation : string;
    public price : number;
    public distance : number;
    public heure_dep : string;
    public heure_arriv : string;

    constructor(trip_id: number, nb_stop: number, route_name: string, route_num: number, depStation: string, arrStation: string, price: number, distance: number, heure_dep: string, heure_arriv: string) {
        this.trip_id = trip_id;
        this.nb_stop = nb_stop;
        this.route_name = route_name;
        this.route_num = route_num;
        this.depStation = depStation;
        this.arrStation = arrStation;
        this.price = price;
        this.distance = distance;
        this.heure_dep = heure_dep;
        this.heure_arriv = heure_arriv;
    }
}
