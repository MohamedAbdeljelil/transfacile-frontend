import {Trip} from "./Trip";
import {Role} from "./Role";
import {Feedback} from "./Feedback";

export class User {
    public idUser: number;
    public nom: string;
    public prenom: string;
    public username: string;
    public email: string;
    public enable: boolean;
    public dateNaiss: string;
    public telephone: number;
    public photosProfil: string;
    public password: string;
    public language: string;
    public fonction: string;
    roles : Role[];
    feedbacks : Feedback[];
    
}
