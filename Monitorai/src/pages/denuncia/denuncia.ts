import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonitoraProvider } from '../../providers/monitora/monitora';
import { HomePage } from '../home/home';

/**
 * Generated class for the DenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
  providers: [
    MonitoraProvider
  ]
})
export class DenunciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public monitoraProvider: MonitoraProvider) {
  }

  Denuncia: any = {};
  
  formularioDenuncia(){
    this.Denuncia.NomeUsuario = "testeuser";
    this.Denuncia.EmailUsuario = "teste@teste.com";
    this.Denuncia.Crime = "0";
    let DataCompleta = new Date;
    let MesCerto = DataCompleta.getMonth() + 1;
    this.Denuncia.Data = DataCompleta.getFullYear().toString()+"/"+MesCerto.toString()+"/"+DataCompleta.getDate().toString()+" "+DataCompleta.getHours().toString()+":"+DataCompleta.getMinutes().toString()+":"+DataCompleta.getSeconds().toString();
    this.Denuncia.Linha = this.Denuncia.Linha.toString();
    let listaInutil:any[] = this.Denuncia;
    this.monitoraProvider.novaDenuncia(JSON.stringify(listaInutil)).subscribe(data=>{
      this.navCtrl.setRoot(HomePage);
    }, error=>{
      console.log(error);
    }
    )
  }

  ionViewDidLoad() {
    
  }

}
