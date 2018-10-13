import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnibusPage } from '../onibus/onibus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  verOnibus(numeroLinha) {
    this.navCtrl.push(OnibusPage,{linha: numeroLinha});
  }

}
