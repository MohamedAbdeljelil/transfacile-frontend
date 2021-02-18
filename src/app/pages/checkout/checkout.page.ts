import {Component, OnInit, ViewChild} from '@angular/core';
import {MatListOption, MatSelectionList, MatSelectionListChange} from '@angular/material/list';
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  @ViewChild(MatSelectionList, {static: true})
  private selectionList: MatSelectionList;

  constructor() { }

  ngOnInit() {
      this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
  }
  listOfCards = [
    {
      type: 'Master Card',
      path: '/assets/img/mastercard.png',
    },
    {
      type: 'Visa Card',
      path: '/assets/img/visa.png',
    },
    {
      type: 'E-dinar Card',
      path: '/assets/img/e-dinar.png',
    }
  ];


  trip = [
    {
      deparcity: 'Tunis',
      depTime : '08:00',
      icon: 'departure_board',
    },
    {
      arrparcity: 'Sfax',
      icon: 'where_to_vote',
    },
    {
      type: 'E-dinar Card',
      path: '/assets/img/e-dinar.png',
    }

];
    // if(event.selected){
    //   this.selectedOptions.push()
    // }
}
