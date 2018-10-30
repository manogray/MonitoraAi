import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenunciaPage } from '../denuncia/denuncia';

/**
 * Generated class for the OnibusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onibus',
  templateUrl: 'onibus.html',
})
export class OnibusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  linha = this.navParams.get('linha');

  ionViewDidLoad() {
  }

  abrirDenuncia(){
    this.navCtrl.push(DenunciaPage);
  }

}
