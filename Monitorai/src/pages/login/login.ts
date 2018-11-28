import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
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
  name: "",
  email:"",
  image: ""
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private googlePlus: GooglePlus, 
    private userdataProvider: UserDataProvider, 
    public http: HttpClient, 
    public splashscreen: SplashScreen,
    public events: Events) {
  
  
  
  }

  ionViewDidLoad() {
  }

  loginGoogle(){
    this.googlePlus.login({})
    .then(res => {
      this.user = res;
      this.pegarDados();
      this.userdataProvider.setConfigData(this.user.name,this.user.email,this.user.image);
      console.log(res);
      this.reload();
    })
    .catch(err => console.error(err));
  }

  login (){
    this.googlePlus.login({
      'webClientId': '236152044904-isf477omvj7i6mmkkuhojperoumvdv6n.apps.googleusercontent.com',
      'offline': true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then( (user: firebase.User)=>{
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.image = user.photoURL;
        this.userdataProvider.setConfigData(this.user.name, this.user.email, this.user.image);
        this.updateMenu();
      }).then (suc =>{
        alert("Login realizado com sucesso");
        this.irParaHome(); 
      }).catch(err =>{
        alert("Falha ao tentar logar"); 
      })
    })
    
  }

  reload(){
    this.splashscreen.show();
    window.location.reload();
  }

  pegarDados(){
    this.http.get('https://www.googleapis.com/plus/v1/people/me?access_token='+this.user.access_token).subscribe((data:any)=>{
      this.user.name = data.displayName;
      this.user.image = data.image.url;
    })
  }

  irParaHome(){
    this.navCtrl.setRoot(HomePage); 
  }

  updateMenu(){
      this.events.publish("user:update", this.user);
  }

  conectarGoogle(){
    //this.loginGoogle();
    this.navCtrl.setRoot(HomePage);
  }
}
