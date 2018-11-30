import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { MonitoraProvider } from '../../providers/monitora/monitora';
import { HomePage } from '../home/home';
import { UserDataProvider } from '../../providers/userdata/userdata';

/**
 * Generated class for the DenunciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
  providers: [
    MonitoraProvider,
    UserDataProvider
  ]
})
export class AvaliacaoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public monitoraProvider: MonitoraProvider, 
    public userdataProvider: UserDataProvider, 
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  Avaliacao: any = {};
  UserData: any = JSON.parse(this.userdataProvider.getConfigData());
  
  formularioAvaliacao(){
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
    loading.present();

    this.Avaliacao.NomeUsuario = this.UserData.displayName;
    this.Avaliacao.EmailUsuario = this.UserData.email;
    let DataCompleta = new Date;
    let MesCerto = DataCompleta.getMonth() + 1;
    this.Avaliacao.Data = DataCompleta.getFullYear().toString()+"/"+MesCerto.toString()+"/"+DataCompleta.getDate().toString()+" "+DataCompleta.getHours().toString()+":"+DataCompleta.getMinutes().toString()+":"+DataCompleta.getSeconds().toString();
    this.Avaliacao.Linha = this.Avaliacao.Linha.toString();
    this.Avaliacao.Satisfacao = this.Avaliacao.Satisfacao.toString();
    if(this.Avaliacao.Descricao == ""){
      this.Avaliacao.Descricao = "Nada a declarar";
    }
    let listaInutil:any[] = this.Avaliacao;
    this.monitoraProvider.novaAvaliacao(JSON.stringify(listaInutil)).subscribe(data=>{
      loading.dismiss();
      this.mostrarToast("Avaliação feita com sucesso!");
      this.navCtrl.setRoot(HomePage);
    }, error=>{
      loading.dismiss();
      this.mostrarToast("Falha ao avaliar!");
      console.log(error);
    }
    )
  }

  mostrarToast(mensagem){
    const toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    
  }

}
