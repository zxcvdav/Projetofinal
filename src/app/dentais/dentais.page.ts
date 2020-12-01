import { Component, OnInit } from '@angular/core';

import {  NavController } from '@ionic/angular';



import { Dental } from '../model/dental';

import { DentalService } from '../services/dental.service';


import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import firebase from 'firebase/app';


@Component({
  selector: 'app-dentais',
  templateUrl: './dentais.page.html',
  styleUrls: ['./dentais.page.scss'],
})
export class DentaisPage implements OnInit {
 
  
  
  lista : Dental[] = [];

  constructor(private dentalServ : DentalService,
   
    
    private fileChooser: FileChooser,
    private file: File,
    private filePath : FilePath,
    private navCtrl : NavController
   ) { }

  ngOnInit() {
    this.dentalServ.listaDeDentais().subscribe(response=>{
    
      console.log(response); 
      this.lista = response;
      console.log(this.lista); 

      
    },err=>{
  
    })
  }

  visualizar(dental){
    this.navCtrl.navigateForward(['/dental-visualizar',dental.id])
  }
  
  choose() {
    this.fileChooser.open().then((uri) => {
      alert(uri);

      this.filePath.resolveNativePath(uri).then(filePath => {
        alert(filePath);
        let dirPathSegments = filePath.split('/');
        let fileName = dirPathSegments[dirPathSegments.length-1];
        dirPathSegments.pop();
        let dirPath = dirPathSegments.join('/');
        this.file.readAsArrayBuffer(dirPath, fileName).then(async (buffer) => {
          await this.upload(buffer, fileName);
        }).catch((err) => {
          alert(err.toString());
        });
      });
    });
  }
  async upload(buffer,name){
    let blob = new Blob([buffer], {type:"image/jpeg/pdf/doc"});

    let storage = firebase.storage();

    storage.ref('images/' + name).put(blob).then((d)=>{
      alert("Done");
    }).catch((error)=>{
      alert(JSON.stringify(error))
    })
  }

 
 
}