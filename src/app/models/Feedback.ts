import {User} from "./User";

export class Feedback{
    public idFeedback : number;
    public subject : string;
    public commentaire : string;
    public emailResponse : string;
    public creationDate : Date;
    public user : User;


    constructor(idFeedback: number, subject: string, commentaire: string,email : string, creationDate : Date, user: User) {
        this.idFeedback = idFeedback;
        this.subject = subject;
        this.commentaire = commentaire;
        this.emailResponse = email;
        this.creationDate = creationDate;
        this.user = user;
    }
}
