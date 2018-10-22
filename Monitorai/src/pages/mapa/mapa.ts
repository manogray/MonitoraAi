import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation'; 

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
 
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  

  @ViewChild('map') mapElement: ElementRef; 
  map: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {

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
    
    }   
 
    this.map = new
    google.maps.Map(this.mapElement.nativeElement, mapOptions); 
  }, (err) =>{
    console.log(err); 
  });

 }

}
