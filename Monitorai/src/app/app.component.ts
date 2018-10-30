import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { ComochegarPage } from '../pages/comochegar/comochegar';
// import { BuscaPage } from '../pages/busca/busca';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { LoginPage } from '../pages/login/login';
import { CustoPage } from '../pages/custo/custo';
import { HomePage } from '../pages/home/home';
import { ViagensPage } from '../pages/viagens/viagens';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private screenOrientation: ScreenOrientation, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Suas Viagens', component: ViagensPage, icon: 'bus'},
      { title: 'Como chegar? ', component: ComochegarPage, icon: 'map' },
      { title: 'Faça uma Denúncia ', component: DenunciaPage, icon: 'megaphone' },
      {title: 'Termos de uso', component: HomePage, icon: 'paper'},
      { title: 'Avalie nosso app ', component: HomePage, icon: 'thumbs-up' }
     
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#c54f00');
      this.splashScreen.hide();
      //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
  }

  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

}
