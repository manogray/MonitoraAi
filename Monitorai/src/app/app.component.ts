import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { DenunciaPage } from '../pages/denuncia/denuncia';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UserDataProvider } from '../providers/userdata/userdata';
import { CustoPage } from '../pages/custo/custo';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { TermosPage } from '../pages/termos/termos';

@Component({
  templateUrl: 'app.html',
  providers: [
    UserDataProvider
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any, icon: string}>;

  userdata: any; 

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private userdataProvider: UserDataProvider,
    public screenOrient: ScreenOrientation,
    private events: Events) {

    events.subscribe("user:update", (user) => {
        
      this.userdata = user;
        
      });
    
    this.initializeApp();
    
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Avalie uma linha', component: AvaliacaoPage, icon: 'bus'},
      { title: 'Faça uma Denúncia ', component: DenunciaPage, icon: 'megaphone' },
      { title: 'Valor real da tarifa', component: CustoPage, icon: 'cash' },
      { title: 'Termos de uso', component: TermosPage, icon: 'paper' }
     
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.userdata = JSON.parse(this.userdataProvider.getConfigData());
      console.log (this.userdata);
  
      if(this.userdata == null){
        this.rootPage = LoginPage;
      }else {
        this.rootPage = HomePage;
      }
      this.screenOrient.lock(this.screenOrient.ORIENTATIONS.PORTRAIT);
      this.statusBar.backgroundColorByHexString('#c54f00');
      this.splashScreen.hide();
    });
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

}
