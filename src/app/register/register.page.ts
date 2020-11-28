import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
username: string=""
password: string=""
  constructor(public afAuth : AngularFireAuth,
    private toastr: ToastController,
    private router: Router
   ) { }

  ngOnInit() {
  }

async register(){
  const {username,password} = this
  try{
    const res= await this.afAuth.createUserWithEmailAndPassword(username,password)
    console.log(res);
    this.toast('Your account was register with success','success');
    this.router.navigate(['/login']);
  }catch(error){
console.dir(error);
this.toast(error.message,'Your account not was register');
  }

}
async toast(message,status)
{
  const toast = await this.toastr.create({
    message: message,
    position: 'top',
    color: status,
    duration: 2000
  });
  toast.present();
}

}
