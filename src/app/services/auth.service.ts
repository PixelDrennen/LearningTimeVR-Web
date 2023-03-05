import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false;
  public authState:any = null;

  constructor(public fireAuth: AngularFireAuth) { this.authStatusListener(); }

  authStatusListener() {
    this.fireAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.authState = res;
        this.loggedIn = true;
      } else this.loggedIn = false;
      console.log("User currently logged in: " + this.loggedIn);
    });

    // console.log("User currently logged in: " + this.loggedIn);
  }
}
