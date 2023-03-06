import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { FirestoreService } from './firestore.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false;
  public authState: any = null;
  public user: User;

  constructor(public fireAuth: AngularFireAuth) { this.authStatusListener(); }

  authStatusListener() {
    this.fireAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.authState = res;
        this.loggedIn = true;
      } else this.loggedIn = false;
      this.onLogin();
    });

    // console.log("User currently logged in: " + this.loggedIn);
  }

  onLogin() {
    console.log("User currently logged in: " + this.loggedIn);
    this.user = this.authState as User;
    console.log("User currently logged in: " + this.user.uid);
    // this.fService.getClassesForCurrentUser();
  }
}
