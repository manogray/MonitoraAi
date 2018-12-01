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
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
  providers: [
    MonitoraProvider,
    UserDataProvider
  ]
})
export class DenunciaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public monitoraProvider: MonitoraProvider, 
    public userdataProvider: UserDataProvider, 
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  Denuncia: any = {};
  UserData: any = JSON.parse(this.userdataProvider.getConfigData());
  
  formularioDenuncia(){
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
    loading.present();

    if(this.Denuncia.Empresa == null){
      loading.dismiss();
      this.mostrarToast("Por favor selecione uma empresa");
      return;
    }

    if(this.Denuncia.Categoria == null){
      loading.dismiss();
      this.mostrarToast("Por favor selecione uma categoria");
      return;
    }

    if(this.Denuncia.Linha == null){
      loading.dismiss();
      this.mostrarToast("Por favor digite uma linha de ônibus");
      return;
    }

    this.Denuncia.NomeUsuario = this.UserData.displayName;
    this.Denuncia.EmailUsuario = this.UserData.email;
    this.Denuncia.Crime = "0";
    let DataCompleta = new Date;
    let MesCerto = DataCompleta.getMonth() + 1;
    this.Denuncia.Data = DataCompleta.getFullYear().toString()+"/"+MesCerto.toString()+"/"+DataCompleta.getDate().toString()+" "+DataCompleta.getHours().toString()+":"+DataCompleta.getMinutes().toString()+":"+DataCompleta.getSeconds().toString();
    this.Denuncia.Linha = this.Denuncia.Linha.toString();
    this.Denuncia.CPFUsuario = this.Denuncia.CPFUsuario.toString();
    if(this.Denuncia.Descricao == null){
      this.Denuncia.Descricao = "Nada a declarar";
    }
    let listaInutil:any[] = this.Denuncia;
    this.monitoraProvider.novaDenuncia(JSON.stringify(listaInutil)).subscribe(data=>{
      loading.dismiss();
      this.mostrarToast("Denúncia feita com sucesso!");
      this.navCtrl.setRoot(HomePage);
    }, error=>{
      loading.dismiss();
      this.mostrarToast("Falha ao fazer denúncia");
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
