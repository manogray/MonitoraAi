import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { GooglePlus } from '@ionic-native/google-plus';
import { ViagensPage } from '../pages/viagens/viagens';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscaPage,
    ComochegarPage, 
    DenunciaPage,
    LoginPage,
    OnibusPage,
    ViagensPage,
    CustoPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuscaPage,
    ComochegarPage,
    DenunciaPage,
    LoginPage,
    OnibusPage,
    ViagensPage,
    CustoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Geolocation,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
