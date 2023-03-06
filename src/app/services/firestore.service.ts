import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, deleteDoc } from 'firebase/firestore'
import { element_class } from 'app/models/element_class';
import { map } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  collection_classes: AngularFirestoreCollection<element_class>;
  classes?: element_class[];
  currentUserClasses?: element_class[] | null;
  // classes?: Observable<element_class[]>;
  snapshot: any;

  constructor(public firestore: AngularFirestore, public authService: AuthService) {
    this.collection_classes = this.firestore.collection('classes', ref => ref.orderBy('title'));
    // this.classes = this.collection_classes.valueChanges();
    this.snapshot = this.firestore.collection('classes', ref => ref.orderBy('title')).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })))).subscribe(data => {
            this.classes = data;
            // console.log(this.classes);
          });
    // this.currentUserClasses = this.getClassesForCurrentUser();

    // this.items = this.firestore.collection('items').valueChanges();
    this.getClassesForCurrentUser();
  }

  getClasses() {
    return this.classes;
  }
  getClassesForCurrentUser() {

    this.snapshot = this.firestore.collection('classes', ref => ref.where('uid', '==', this.authService.user.uid).orderBy('title')).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })))).subscribe(data => {
            this.currentUserClasses = data;
            console.log(data);
          });
  }

  addClass(c: element_class) {
    this.collection_classes.add(c).then(_ => alert('Successfully added class ' + c.title));
  }

  deleteClass(fieldID: string) {
    const ref = this.firestore.collection('classes');
    ref.doc(fieldID).delete();
  }
}
