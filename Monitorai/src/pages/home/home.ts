import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpClient } from '@angular/common/http';
import { UserDataProvider} from '../../providers/userdata/userdata'




declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    UserDataProvider
  ]
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef; 
  map: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  posicaoDestino: string;
  posicaoOrigem:any;

  diplayName: string; 
  imgUrl: string; 
  email: string;
  user:any;


  constructor(public navCtrl: NavController,
    public geolocation : Geolocation, 
    public navParams: NavParams, 
    private googlePlus: GooglePlus,
    private http: HttpClient,
    private userDataProvider: UserDataProvider
    ) {
     
  }

 

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions ={
        center: latLng,
        zoom: 16, 
        disableDefaultUI: true
      }  

      this.map = new
      google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.posicaoOrigem = latLng;
      this.directionsDisplay.setMap(this.map);
  
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

  calculaRota(){
    if(this.posicaoDestino){
      const request = {
        origin: this.posicaoOrigem,
        destination: this.posicaoDestino,
        travelMode: 'TRANSIT'
      };

      this.tracarRota(this.directionsService, this.directionsDisplay, request);
    }
  }

  tracarRota(service: any, display: any, request: any){
    service.route(request, function (result, status){
      if(status == 'OK'){
        display.setDirections(result);
      }
    });
  }

}
