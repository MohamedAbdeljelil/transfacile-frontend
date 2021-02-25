import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/User";

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public host= "http://localhost:8080/api/test/";

    constructor(private http: HttpClient) {}

    public getUsers():Observable<any>{
        return this.http.get(this.host + 'users');
    }
    public getUsersWithPageAndSize(page : number,size:number):Observable<any>{
        return this.http.get(this.host + 'allUsers?page='+page+'&size='+size);
    }
    getPublicContent(): Observable<any> {
        return this.http.get(API_URL + 'all', {responseType: 'text'});
    }

    getUserBoard(): Observable<any> {
        return this.http.get(API_URL + 'user', {responseType: 'text'});
    }
    getModeratorBoard(): Observable<any> {
        return this.http.get(API_URL + 'mod', {responseType: 'text'});
    }

    getAdminBoard(): Observable<any> {
        return this.http.get(API_URL + 'admin', {responseType: 'text'});
    }

    public deleteUser(id:number){
        return this.http.delete(this.host + 'user/'+id);
    }

}
