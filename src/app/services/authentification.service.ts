import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/User";

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {
    currentUser :User;

    constructor(private http: HttpClient) {
    }

    login(credentials): Observable<any> {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }

    register(user): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            nom: user.nom,
            prenom: user.prenom,
            username: user.username,
            email: user.email,
            enable: user.enable,
            dateNaiss: user.dateNaiss,
            telephone: user.telephone,
            photosProfil: user.photosProfil,
            fonction: user.fonction,
            password: user.password,
            language : user.language,
            roles: user.roles,
        }, httpOptions);
    }
    public getUserById(id : number) : Observable<any>{
        return this.http.get(AUTH_API + 'user/'+id);
    }
    setCurrentUser(user){
        this.currentUser=user;
    }
    getCurrentUser(){
        return this.currentUser;
    }
}
