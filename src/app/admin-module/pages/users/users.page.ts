import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {User} from "../../../models/User";
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {StopsModalPage} from "../../../modals/stops-modal/stops-modal.page";
import {NewUserPage} from "../new-user/new-user.page";
import {EditUserPage} from "../edit-user/edit-user.page";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  bulkEdit = false;
  sortDirection=0;
  users : User[];
  sortkey=null;
  edit ={};
  total =0;
  size=5;
  resultCount =0;
   page=0;
   totalPages : number;

  constructor(private usersService : UsersService,private alertCtrl : AlertController,
              private modalController : ModalController,private loadingCtrl : LoadingController) {
    this.loadData();
  }

  ngOnInit() {

  }
  async loadData() {
    const loading = await this.loadingCtrl.create({message: 'Logging in...'});
    await loading.present();
    this.usersService.getUsersWithPageAndSize(this.page, this.size).subscribe(res => {
      // this.users=res;
      this.users = res['users'];
      this.resultCount = res['totalItems'];
      this.totalPages = res['totalPages'];
      console.log(res);
      this.sort();
      this.loadingCtrl.dismiss();
    });
  }

  sortBy(key: string) {
    this.sortkey=key;
    this.sortDirection++;
    this.sort();
  }
  sort(){
    if(this.sortDirection==1){
      this.users=this.users.sort((a,b)=>{
        const valA=a[this.sortkey];
        const valB=b[this.sortkey];
        return valA.localeCompare(valB);
      });
    }
    else if(this.sortDirection==2){
      this.users=this.users.sort((a,b)=>{
        const valA=a[this.sortkey];
        const valB=b[this.sortkey];
        return valB.localeCompare(valA);
      });
    }

    else {
      this.sortDirection=0;
      this.sortkey=null;
    }

  }

  toggleBulkEdit() {
      this.bulkEdit =!this.bulkEdit;
      this.edit = {};
  }

  BulkDelete() {
      console.log('this.edit :' ,this.edit);
      const toDelete = Object.keys(this.edit);
      console.log(toDelete);
      const reallyDelete = toDelete.filter(index => this.edit[index]).map(key => +key);
      while (reallyDelete.length){
        this.users.splice(reallyDelete.pop(),1);
      }
      this.toggleBulkEdit();
  }

  async remove(i: number,user:User) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-del',
      header: 'Supprimer ',
      message: "Voulez vous supprimer cet utilisateur ?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',

          handler: () => {
          }
        }, {
          text: "Ok",
          handler: () => {
            console.log('Confirm Ok');
            this.usersService.deleteUser(user.idUser).subscribe(()=>{
              console.log('Success');
              this.users.splice(i,1);
            });

          },

        }
      ]
    });
    await alert.present();

  }
  nextPage(){
    this.page++;
    this.loadData();
  }
  PrevPage(){
    this.page--;
    this.loadData();
  }
  goFirst(){
    this.page=0;
    this.loadData();
  }
  goLast(){
    this.page = this.totalPages -1;
    this.loadData();
  }


  async addNewUser(users) {
    const modal = await this.modalController.create({
      component: NewUserPage,
      // cssClass : 'stop-modal',
      swipeToClose : true,
      // componentProps: {
      //   users : users,
      //   // valueCity : data
      // }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.role === 'user') {
        console.log(dataReturned.data);
        this.users.push(dataReturned.data);
        this.loadData();
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();


  }

  async editUser(user: User) {
    const modal = await this.modalController.create({
      component: EditUserPage,
      // cssClass : 'stop-modal',
      swipeToClose : true,
      componentProps: {
        editUser : user
        // valueCity : data
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.role === 'userEdited') {
        console.log(dataReturned.data);
        // this.users.push(dataReturned.data);
        user =dataReturned.data;
        console.log(user);
        this.loadData();
        // alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();


  }
}
