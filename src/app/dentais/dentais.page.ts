import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { Dental } from '../model/dental';
import { DentalService } from '../services/dental.service';

declare var google: any;

@Component({
  selector: 'app-dentais',
  templateUrl: './dentais.page.html',
  styleUrls: ['./dentais.page.scss'],
})
export class DentaisPage implements OnInit {
  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef; 
 
  @ViewChild("nome") nome; 

  lista : Dental[] = [];

  constructor(private dentalServ : DentalService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.dentalServ.listaDeDentais().subscribe(response=>{
      
      
      this.lista = response;
     

      
    },err=>{
    
    })
  }

  visualizar(dental){
    this.navCtrl.navigateForward(['/dental-visualizar',dental.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.dentalServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  infoWindows: any = [];
  markers: any = [
    {
        title: "Teste",
        latitude: "-22.905968341045217",
        longitude: "-43.56552668163306"
    },
    {
        title: "Dental Nova Bangu",
        latitude: "-22.874544048472586",
        longitude: "-43.46599810253432"
    },
    {
        title: "Dominican Convent School",
        latitude: "-17.822647",
        longitude: "31.052042"
    },
    {
        title: "Chop Chop Brazilian Steakhouse",
        latitude: "-17.819460",
        longitude: "31.053844"
    },
    {
        title: "Canadian Embassy",
        latitude: "-17.820972",
        longitude: "31.043587"
    }
  ];
  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                              '<ion-button id="navigate">Navigate</ion-button>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          console.log('navigate button clicked!');
          // code to navigate using google maps app
          window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude);
        });
      });

    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(-22.900925, -43.556404);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
 

}