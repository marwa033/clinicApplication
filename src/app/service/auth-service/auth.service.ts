import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedData } from '../../Shared/sharedClass';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData   : any;
  isLoggedIn = false;

   constructor(private firebaseAuth : AngularFireAuth,
               private router : Router,
               private http:HttpClient,
               private toastr : ToastrService) {
   }

   /*
    *  getLocalStorageUser function is used to get local user profile data.
    */
   getLocalStorageUser(){
      this.userData = JSON.parse(localStorage.getItem("headerToken"));
      if(this.userData) {
         this.isLoggedIn = true;
         return true;
      } else {
         this.isLoggedIn = false;
         return false;
      }
   }

   /*
    * loginUser fuction used to login
    */
   // loginUser(value) {
   //    this.firebaseAuth
   //    .signInWithEmailAndPassword(value.email,value.password)
   //    .then(value => {
   //       this.setLocalUserProfile(value);
   //       this.toastr.success('Successfully Logged In!');
   //       this.router.navigate(['/']);
   //    })
   //    .catch(err => {
   //       this.toastr.error(err.message);
   //    });
   // }
   // login(value){
   //    console.log('*')
   //    return this.http.post(`${SharedData.BASE_URL}auth/users/login/email`,
   //    {
   //       email: value.email,
   //      password: value.password
   //  }, {responseType: 'text'})
   //  }
   async login(value) {
      const data = {email: value.email, password: value.password};
      const bodyobj = JSON.stringify(data);
      const request = new Request(`${SharedData.BASE_URL}auth/users/login/email`, {
        method: 'POST',
        body: bodyobj
    });
     request.headers.delete('Content-Type');
    request.headers.append('Content-Type', 'application/json');
    const response = await fetch( request);
    const responsedata = await response.json();
    let message = responsedata.message;
    if (message) {
      this.toastr.error(message);
      this.router.navigate(['/session/login']);
    }
     else{
      this.getrsponse(responsedata);
    }
   }
   getrsponse(resposne) {
      this.toastr.success('Successfully Logged In!');
      this.router.navigate(['/']);
      this.userData = resposne['x-auth-token'];
      this.setHeader(this.userData)
  }

   /*
    * logOut function is used to sign out
    */
   logOut() {
      // this.firebaseAuth
      // .signOut();
      localStorage.removeItem("headerToken");
      this.isLoggedIn = false;
      this.toastr.success("Successfully logged out!");
      this.router.navigate(['/session/login']);
   }

   setHeader(value){
   	localStorage.setItem("headerToken", JSON.stringify(value));      
      this.getLocalStorageUser();
      this.isLoggedIn = true;
   }
}
