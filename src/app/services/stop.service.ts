import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const host = "http://localhost:8080/api/test";
@Injectable({
  providedIn: 'root'
})
export class StopService {


  constructor(private httpClient: HttpClient) {
  }

  public getStopes() {
    return this.httpClient.get(host + "/stop/all");
  }

  public getStopById(id : number) {
    return this.httpClient.get(host + "/stop/{id}");
  }

  public deleteResource(url) {
    return this.httpClient.delete(host + url);
  }

  public saveVoyage(url, data) {
    return this.httpClient.post(url, data);
  }

  public updateResource(url, data) {
    return this.httpClient.put(url, data);
  }
}
