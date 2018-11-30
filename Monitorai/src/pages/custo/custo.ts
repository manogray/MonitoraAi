import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DenunciaPage } from '../denuncia/denuncia';

/**
 * Generated class for the CustoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custo',
  templateUrl: 'custo.html',
})
export class CustoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Distancia: number;
  Tempo: number;
  Pessoas: number;

  calcularPreco(){
    console.log("chamei");
    let custoPerKm = 6.15;
    let IPK = 1.6102;
    let elementTrajeto = document.getElementById('valorCalcKm');
    let elementValor = document.getElementById('valorCalcReal');
    let elementTempo = document.getElementById('valorCalcTempo');
    let valorTexto: string
    
    if(this.Pessoas == null){
      console.log('Média de pessoas');
      elementTrajeto.innerHTML = this.Distancia.toString()+" Km";
      let valor = (custoPerKm*this.Distancia)/(this.Distancia*IPK);
      valorTexto = valor.toFixed(2);
      elementValor.innerHTML = "R$ "+valorTexto;
      elementTempo.innerHTML = this.Tempo.toString();
    }else {
      console.log('Pessoas reais');
      elementTrajeto.innerHTML = this.Distancia.toString()+" Km";
      let valor = (custoPerKm*this.Distancia)/(this.Pessoas);
      console.log(valor);
      elementValor.innerHTML = "R$ "+valor.toString();
      elementTempo.innerHTML = this.Tempo.toString()+" min";
    }
  }

}
