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
import {AngularFireModule} from 'angularfire2'; 
import firebase from 'firebase'; 
import { UserDataProvider } from '../providers/userdata/userdata';

export const firebaseConfig ={

    apiKey: "AIzaSyBdOvHwOIEG8vY-ByJSsVzk6kDT-RHNSck",
    authDomain: "monitorai-1539520830956.firebaseapp.com",
    databaseURL: "https://monitorai-1539520830956.firebaseio.com",
    projectId: "monitorai-1539520830956",
    storageBucket: "monitorai-1539520830956.appspot.com",
    messagingSenderId: "236152044904"
}
  firebase.initializeApp(firebaseConfig);

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
    AngularFireModule
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
    UserDataProvider,
    Geolocation,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
