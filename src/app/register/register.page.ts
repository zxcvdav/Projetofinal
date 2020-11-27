import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
username: string=""
password: string=""
  constructor(public afAuth : AngularFireAuth) { }

  ngOnInit() {
  }

async register(){
  const {username,password} = this
  try{
    const res= await this.afAuth.createUserWithEmailAndPassword(username,password)
    console.log(res);
  }catch(error){
console.dir(error);
  }

}

}
