import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BusService {

  public host= "http://localhost:8080/api/test/bus";
  constructor(private httpClient: HttpClient) {}
  public getBuses(page:number,size:number){
    return  this.httpClient.get(this.host+"/all");
  }
  public getTripsByKeyword(st : string, page:number,size:number){
    return  this.httpClient.get(this.host+"/byStopPage?mc="+st+"&page="+page+"&size="+size);
  }
  public getTripsByStop(st : string){
    return  this.httpClient.get(this.host+"/byStop?st="+st);
  }
  public getTripById(id : number){
    return this.httpClient.get(this.host + "/{id}");
  }
  public deleteResource(url){
    return this.httpClient.delete(url);
  }
  public saveResource(url,data){
    return this.httpClient.post(url,data);
  }
  public getResource(url) {
    return this.httpClient.get(url);
  }
  public updateResource(url,data){
    return this.httpClient.put(url,data);
  }
}
