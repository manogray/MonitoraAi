import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DenunciaPage } from '../pages/denuncia/denuncia';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CustoPage } from '../pages/custo/custo';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
import {AngularFireModule} from 'angularfire2'; 
import firebase from 'firebase'; 
import { UserDataProvider } from '../providers/userdata/userdata';
import { MonitoraProvider } from '../providers/monitora/monitora';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { TermosPage } from '../pages/termos/termos';

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
    DenunciaPage,
    LoginPage,
    CustoPage,
    AvaliacaoPage,
    TermosPage
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
    DenunciaPage,
    LoginPage,
    CustoPage,
    AvaliacaoPage,
    TermosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    UserDataProvider,
    Geolocation,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonitoraProvider
  ]
})
export class AppModule {}
