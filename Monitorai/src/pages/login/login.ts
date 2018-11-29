import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { UserDataProvider } from '../../providers/userdata/userdata';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase'; 
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    UserDataProvider
  ]
})
export class LoginPage {

  user:any = {
  displayName: "",
  email:"",
  imageUrl: ""
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private googlePlus: GooglePlus, 
    private userdataProvider: UserDataProvider,
    public http: HttpClient, 
    public splashscreen: SplashScreen,
    public events: Events,
    public loadingCtrl: LoadingController) {
  
  
  
  }

  ionViewDidLoad() {
  }

  loginGoogle(){
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Fazendo login...'
    });
    loading.present();
    this.googlePlus.login({})
    .then(res => {
      this.user = res;
      this.pegarDados();
      this.userdataProvider.setConfigData(this.user.displayName,this.user.email,this.user.imageUrl);
      loading.dismiss();
      this.updateMenu();
      this.irParaHome();
    })
    .catch(err => console.error(err));
  }

  /*LOGIN COM FIREBASE
  login(){
    this.googlePlus.login({
      'WebClientId': '236152044904-isf477omvj7i6mmkkuhojperoumvdv6n.apps.googleusercontent.com',
      'offline': true
    }).then(res=>{
      alert("Autenticando..."+res.email);
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.accessToken))
      .then( (user: firebase.User)=>{
        alert("Entrando como "+user.displayName);
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.image = user.photoURL;
        this.userdataProvider.setConfigData(this.user.name, this.user.email, this.user.image);
        alert("Dados de usuario no sistema");
        this.updateMenu();
      }).then (suc =>{
        alert("Login realizado com sucesso");
        this.irParaHome(); 
      }).catch(err =>{
        alert("Falha ao tentar logar"); 
      })
    })
    
  }
  */

  reload(){
    this.splashscreen.show();
    window.location.reload();
  }

  pegarDados(){
    this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+this.user.accessToken).subscribe((data:any)=>{
      this.user.displayName = data.displayName;
      this.user.imageUrl = data.image.url;
    })
  }

  irParaHome(){
    this.navCtrl.setRoot(HomePage); 
  }

  updateMenu(){
      this.events.publish("user:update", this.user);
  }
}
