import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../models/Trip";
import {HttpClient} from "@angular/common/http";
import {Feedback} from "../models/Feedback";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public host= "http://localhost:8080/api/test/feedback";
  constructor(private httpClient: HttpClient) { }

  public getFeedbacks() :Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(this.host + "/all");
  }

  public getFeedbackById(id : number) :Observable<Feedback>{
    return this.httpClient.get<Feedback>(this.host + "/"+id);
  }

  public deleteFeedback(id :number) {
    return this.httpClient.delete(this.host + "/"+id);
  }

  public saveFeedback(data : Feedback,user : User) {
    data.user=user;
    console.log(user);
    return this.httpClient.post(this.host, data);
  }

  public updateFeedback(id:number,data) {
    return this.httpClient.put(this.host+"/"+id, data);
  }
}
