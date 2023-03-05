import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { element_class } from '../models/element_class';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LessonModuleService {
  collection_classes: AngularFirestoreCollection<element_class>;
  classes?: element_class[];
  // classes?: Observable<element_class[]>;
  snapshot: any;

  constructor(public firestore: AngularFirestore) {
    this.collection_classes = this.firestore.collection('classes');
    // this.classes = this.collection_classes.valueChanges();
    this.snapshot = this.firestore.collection('classes').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })))).subscribe(data => {
            this.classes = data;
            console.log(this.classes);
          });

    // this.items = this.firestore.collection('items').valueChanges();
  }

  getClasses() {
    return this.classes;
  }
}

