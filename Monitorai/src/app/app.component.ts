import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { ComochegarPage } from '../pages/comochegar/comochegar';
// import { BuscaPage } from '../pages/busca/busca';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { LoginPage } from '../pages/login/login';
import { CustoPage } from '../pages/custo/custo';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Como chegar? ', component: ComochegarPage, icon: 'map' },
      { title: 'Faça uma Denúncia ', component: DenunciaPage, icon: 'megaphone' },
      { title: 'Avalie nosso app ', component: ListPage, icon: 'thumbs-up' },
      { title: 'Custo', component: CustoPage, icon: 'logo-usd'},
      {title: 'Termos de uso', component: HomePage, icon: 'paper'}
     
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
