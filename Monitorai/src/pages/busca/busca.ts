import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnibusPage } from '../onibus/onibus';

/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  verOnibus(numeroLinha) {
    this.navCtrl.push(OnibusPage,{linha: numeroLinha});
  }

  initializeItems() {
    this.items = [
      '001',
      '002',
      '003',
      '004',
      '005',
      '008',
      '118',
      '213',
      '215',
      '352',
      '502',
      '540',
      '541',
      '542',
      '616',
      '652',
      '671',
      '672',
      '678',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}