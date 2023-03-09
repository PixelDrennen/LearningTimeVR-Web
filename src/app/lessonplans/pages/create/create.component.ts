import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { element_class } from 'app/models/element_class';
import { element_lessonModule } from 'app/models/element_lessonModule';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';
import { User } from 'app/services/user';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Reference } from '@angular/fire/compat/firestore';
import { Student } from 'app/models/student';
import { Schedule } from 'app/models/schedule';
import { Teacher } from 'app/models/teacher';
import { metadata_sprite } from 'app/models/metadata/metadata_sprite';
import { metadata_location } from 'app/models/metadata/metadata_location';

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
  lessonModuleEditorModal:any;

  constructor(public fsService: FirestoreService, public authService: AuthService) {
    this.lessonModuleEditorModal = document.querySelector('#lessonModuleModal');
    
  }

  // element_class
  inputTitle: any | null = "Example Title";
  inputDescription: any | null = "Example Description";
  inputTags: any | null = "Example Tag 1, Example Tag 2";
  inputHeader: any | null = "Example Header";
  inputLocation: any | null = "Example Location";

  id?: string | null;
  title: string | null;
  description: string | null;
  lessonModules: element_lessonModule[] | null = null;

  students: Reference<Student>[] | null;
  teachers: Reference<Teacher>[] | null;
  schedule: Reference<Schedule> | null;

  tags: string | null;
  previewSprites: Reference<metadata_sprite>[] | null;
  header: string | null;
  locationID: metadata_location | null;
  dateCreated: string | null;
  dateUpdated: string | null;
  author: string | null;
  uid: string | null;



  createdClass: element_class = {} as element_class;

  loadClassForEdit(c: element_class) {
    // populate fields
    this.inputTitle = c.title;
    this.inputDescription = c.description;
    this.inputTags = c.tags;
    this.inputHeader = c.header;
    this.inputLocation = null;
    this.lessonModules = c.lessonModules;
  }

  addLessonModule() {
    const lm: element_lessonModule =
    {
      title: "lessonModule example", description: "example desc", contentClusters: null,
      creatorName: this.authService.user.email, dateCreated: new Date().toString().toString(), dateUpdated: new Date().toString().toString(),
      header: "Header example", tags: "Tag1, Tag2", startingLocation: null, previewSprite: null, devDescription: "Dev description"
    };


    if (this.lessonModules == null)
      this.lessonModules = [];
    if (lm != null)
      this.lessonModules.push(lm);
    console.log(this.lessonModules);
  }

  saveCreatedClass() {
    this.createdClass.title = this.inputTitle;
    this.createdClass.description = this.inputDescription;
    this.createdClass.tags = this.inputTags;
    this.createdClass.header = this.inputHeader;
    this.createdClass.locationID = this.inputLocation;
    this.createdClass.dateCreated = new Date().toString();
    this.createdClass.dateUpdated = new Date().toString();
    this.createdClass.uid = this.authService.user.uid;
    this.createdClass.author = this.authService.user.displayName;
    this.createdClass.students = null;
    this.createdClass.teachers = null;
    this.createdClass.schedule = null;
    this.createdClass.previewSprites = null;

    this.createdClass.lessonModules = this.lessonModules;

    console.log(this.createdClass);
    this.fsService.addClass(this.createdClass);
  }


  trim(input: string) {
    if (input == null) return "";
    return input.slice(0, 50).trim();
  }

  EditLessonModule(index: number) {
    
  }

  

}
