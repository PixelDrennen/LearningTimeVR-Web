import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { element_class } from 'app/models/element_class';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';
import { User } from 'app/services/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
    '[style.overflow]': '"hidden"'
  }
})
export class CreateComponent {
  constructor(public fsService: FirestoreService, public authService: AuthService) {

  }

  inputTitle: any = "Example Title";
  inputDescription: any = "Example Description";
  inputTags: any = "Example Tag 1, Example Tag 2";
  inputHeader: any = "Example Header";
  inputLocation: any = "Example Location";

  createdClass: element_class = {} as element_class;

  loadClassForEdit(c: element_class) {
    // populate fields
  }

  saveCreatedClass() {
    this.createdClass.title = this.inputTitle;
    this.createdClass.description = this.inputDescription;
    this.createdClass.tags = this.inputTags;
    this.createdClass.header = this.inputHeader;
    this.createdClass.locationID = this.inputLocation;
    this.createdClass.dateCreated = new Date().toString();
    this.createdClass.uid = this.authService.user.uid;
    this.createdClass.author = this.authService.user.displayName;

    console.log(this.createdClass);
    this.fsService.addClass(this.createdClass);
  }
}
