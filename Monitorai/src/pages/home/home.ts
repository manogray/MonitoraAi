//import {
  //GoogleMaps,
  //GoogleMap,
  //GoogleMapsEvent,
  //GoogleMapOptions,
  //CameraPosition,
  //MarkerOptions,
//  Marker,
//  Environment
//} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnibusPage } from '../onibus/onibus';
import { BuscaPage } from '../busca/busca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  verOnibus(numeroLinha) {
    this.navCtrl.push(OnibusPage,{linha: numeroLinha});
  }

  vaiParaBusca(){
    this.navCtrl.push(BuscaPage)
  } 

  /*
  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDqYpD9wyD7wiWnyJ12nhgKUuVaVwdqw5w',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDqYpD9wyD7wiWnyJ12nhgKUuVaVwdqw5w'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: -3.092570,
           lng: -60.018327
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: -3.092570,
        lng: -60.018327
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}
*/

}
