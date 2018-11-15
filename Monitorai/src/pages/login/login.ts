import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { UserDataProvider } from '../../providers/userdata/userdata';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';

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

  user:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus, private userdataProvider: UserDataProvider, public http: HttpClient, public splashscreen: SplashScreen) {
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

  conectarGoogle(){
    this.loginGoogle();
  }
}
