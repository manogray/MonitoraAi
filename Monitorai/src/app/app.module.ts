import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComochegarPage } from '../pages/comochegar/comochegar';
import { BuscaPage } from '../pages/busca/busca';
import { DenunciaPage } from '../pages/denuncia/denuncia';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { OnibusPage } from '../pages/onibus/onibus';
import { CustoPage } from '../pages/custo/custo';
import { Geolocation } from '@ionic-native/geolocation';
import {MapaPage} from '../pages/mapa/mapa'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BuscaPage,
    ComochegarPage, 
    DenunciaPage,
    LoginPage,
    OnibusPage,
    CustoPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BuscaPage,
    ComochegarPage,
    DenunciaPage,
    LoginPage,
    OnibusPage,
    CustoPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
