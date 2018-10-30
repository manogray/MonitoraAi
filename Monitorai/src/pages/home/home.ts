import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnibusPage } from '../onibus/onibus';
import { BuscaPage } from '../busca/busca';
import {Geolocation} from '@ionic-native/geolocation'; 


declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef; 
  map: any;

  constructor(public navCtrl: NavController, public geolocation : Geolocation) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions ={
        center: latLng,
        zoom: 15, 
        disableDefaultUI: true
      }   
   
      this.map = new
      google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
      const marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
  
        title:'Você está aqui',
        icon: 'assets/imgs/userpoint.png'
      })
    }, (err) =>{
      console.log(err); 
    });
  }

  verOnibus(numeroLinha) {
    this.navCtrl.push(OnibusPage,{linha: numeroLinha});
  }

  vaiParaBusca(){
    this.navCtrl.push(BuscaPage)
  }

}
