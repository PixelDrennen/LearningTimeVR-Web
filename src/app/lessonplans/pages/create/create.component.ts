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
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerI18n, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from 'app/services/modal.service';
import { element_contentCluster } from 'app/models/element_contentCluster';
import { element_content } from 'app/models/element_content';

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
  lessonModuleEditorModal: any;

  constructor(public fsService: FirestoreService, public authService: AuthService, private formBuilder: FormBuilder, public modalService: ModalService) {


    this.lessonModuleEditorModal = document.querySelector('#lessonModuleModal');

  }

  locationGroup = new FormGroup({
    lmformInput_location: new FormControl(0, Validators.required)
  });
  get f() {
    return this.locationGroup.controls;
  }

  lessonModules: element_lessonModule[] | null = null;

  // element_class
  inputTitle: any | null = "Example Title";
  inputDescription: any | null = "Example Description";
  inputTags: any | null = "Example Tag 1, Example Tag 2";
  inputHeader: any | null = "Example Header";
  inputLocation: any | null = "Example Location";

  id?: string | null;
  title: string | null;
  description: string | null;

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
  cformInput_previewSprite: any;



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

  //   addLessonModule() {
  //     const lm: element_lessonModule =
  //     {
  //       title: "lessonModule example", description: "example desc", contentClusters: null,
  //       creatorName: this.authService.user.email, dateCreated: new Date().toString().toString(), dateUpdated: new Date().toString().toString(),
  //       header: "Header example", tags: "Tag1, Tag2", startingLocation: null, previewSprite: null, devDescription: "Dev description"
  //     };
  // 
  // 
  //     if (this.lessonModules == null)
  //       this.lessonModules = [];
  //     if (lm != null)
  //       this.lessonModules.push(lm);
  //     console.log(this.lessonModules);
  //   }

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


  trim(input: string | null) {
    if (input == null) return "";
    return input.slice(0, 50).trim();
  }

  lmformInput_title: any;
  lmformInput_description: any;
  lmformInput_header: any;
  lmformInput_tags: any;
  lmformInput_location: any;
  lmformInput_previewSprite: any;

  AddLessonModule() {

    console.log(this.lmformInput_title);

    console.log(this.locationGroup.value);
    var x: number | null = null;
    if (this.locationGroup.value.lmformInput_location != undefined)
      x = this.locationGroup.value.lmformInput_location;

    var loc: metadata_location | null = { id: "none", devDescription: "none", dateCreated: new Date().toString(), dateUpdated: new Date().toString(), label: "none", sceneName: "none", sceneIndex: x };

    var lm: element_lessonModule =
    {
      title: this.lmformInput_title, description: this.lmformInput_description, contentClusters: null,
      creatorName: this.authService.user.email, dateCreated: new Date().toString(), dateUpdated: new Date().toString(),
      header: this.lmformInput_header, tags: this.lmformInput_tags, startingLocation: loc, previewSprite: null, devDescription: "None"
    };
    console.log(lm);

    if (this.lessonModules == null)
      this.lessonModules = [];
    if (lm != null)
      this.lessonModules.push(lm);


    this.lmformInput_title = "";
    this.lmformInput_description = "";
    this.lmformInput_header = "";
    this.lmformInput_previewSprite = null; // TODO: Fix sprites upload
    this.lmformInput_tags = "";
    this.locationGroup.patchValue({ lmformInput_location: 0 });

  }

  OpenLessonModuleEditorModal(index: number) {
    this.editing = true;
    // console.log("Edit");
    if (this.lessonModules != null) {
      if (this.lessonModules[index] != null) {
        var lm: element_lessonModule | null = this.lessonModules[index];

        this.lmformInput_title = lm.title;
        this.lmformInput_description = lm.description;
        this.lmformInput_header = lm.header;
        this.lmformInput_previewSprite = null; // TODO: Fix sprites upload
        this.lmformInput_tags = lm.tags;
      }
    }
  }

  editing: Boolean = false;

  CommitEditToLessonModule(index: number) {
    var x: number | null = null;
    if (this.locationGroup.value.lmformInput_location != undefined)
      x = this.locationGroup.value.lmformInput_location;

    var loc: metadata_location | null = { id: "none", devDescription: "none", dateCreated: new Date().toString(), dateUpdated: new Date().toString(), label: "none", sceneName: "none", sceneIndex: x };


    var lm: element_lessonModule =
    {
      title: this.lmformInput_title, description: this.lmformInput_description, contentClusters: null,
      creatorName: this.authService.user.email, dateCreated: new Date().toString(), dateUpdated: new Date().toString(),
      header: this.lmformInput_header, tags: this.lmformInput_tags, startingLocation: loc, previewSprite: null, devDescription: "None"
    };

    if (this.lessonModules != null)
      this.lessonModules[index] = lm;

    this.editing = false;
  }
  CloseEditAndCancel() {
    this.lmformInput_title = "";
    this.lmformInput_description = "";
    this.lmformInput_header = "";
    this.lmformInput_previewSprite = null; // TODO: Fix sprites upload
    this.lmformInput_tags = "";
    this.locationGroup.patchValue({ lmformInput_location: 0 });

    this.editing = false;
  }

  ccformInput_title: any;
  ccformInput_description: any;
  ccformInput_header: any;
  ccformInput_transFrom: any;
  ccformInput_transTo: any;

  ccformInput_creatorName: any;
  ccformInput_tags: any;
  ccformInput_startingLocation: any;
  ccformInput_devDescription: any;
  ccformInput_previewSprite: any;
  lmIndex: number;

  OpenContentClusterEditor(lmIndex: number) {
    this.lmIndex = lmIndex;
  }

  AddContentCluster() {
    var cc: element_contentCluster =
    {
      title: this.ccformInput_title, description: this.ccformInput_description, header: this.ccformInput_header,
      transitionTo: this.ccformInput_transTo, transitionFrom: this.ccformInput_transFrom, creatorName: this.ccformInput_creatorName,
      tags: this.ccformInput_tags, startingLocation: this.ccformInput_startingLocation, devDescription: "None", previewSprite: null, content: null,
    };
    console.log(cc);

    var lm: element_lessonModule | null;
    if (this.lessonModules != null)
      if (this.lessonModules[this.lmIndex] != null) {
        lm = this.lessonModules[this.lmIndex];

        if (this.lessonModules[this.lmIndex].contentClusters == null)
          this.lessonModules[this.lmIndex].contentClusters = [];

        var db_cc: element_contentCluster[] | null;
        if (this.lessonModules[this.lmIndex].contentClusters != null) {
          db_cc = this.lessonModules[this.lmIndex].contentClusters;

          if (db_cc != null)
            db_cc.push(cc);
        }

      }

    this.ccformInput_title = "";
    this.ccformInput_description = "";
    this.ccformInput_header = "";
    this.ccformInput_transTo = 0;
    this.ccformInput_transFrom = 0;
    this.ccformInput_previewSprite = null; // TODO: Fix sprites upload
    this.ccformInput_tags = "";
    // this.locationGroup.patchValue({ ccformInput_location: 0 });
  }

  EditContentCluster() {

  }



  // cInput_SetURL: any | null;
  // cInput_CachedFilePath: any | null;
  // cInput_Pos_x: string | null;
  // cInput_Pos_y: string | null;
  // cInput_Pos_z: string | null;
  // cInput_Rot_x: string | null;
  // cInput_Rot_y: string | null;
  // cInput_Rot_z: string | null;
  // cInput_Scale_x: string | null;
  // cInput_Scale_y: string | null;
  // cInput_Scale_z: string | null;
  // cInput_StringParams: string[] | null;
  // cInput_FloatParams: string[] | null;
  // cInput_AvailableImagesContent: metadata_sprite[] | null;
  // cInput_StartingLocation: metadata_location | null;
  // cInput_PreviewSprite: metadata_sprite | null;

  cInput_Title: any;
  cInput_Description: any;
  cInput_GetURL: any;
  cInputContentType: any;
  cInput_Tags: any;
  cInput_Header: any;
  cInput_File: any;
  ccIndex: number;

  OpenContentEditor(ccIndex: number) {
    this.ccIndex = ccIndex;
  }
  

  AddContent() {
    var content: element_content = {
      title: this.cInput_Title, description: this.cInput_Description, getURL: this.cInput_GetURL,
      contentType: 0, tags: this.cInput_Tags, header: this.cInput_Header,
      setURL: null, cachedFilePath: null, position: null, rotation: null, scale: null,
      stringParameters: null, floatParameters: null, availableImagesContent: null,
      id: null, dateCreated: new Date().toString(), dateUpdated: new Date().toString(), creatorName: this.authService.user.email,
      devDescription: "None", startingLocation: null, previewSprite: null
    }

    //TODO: Add content type with indices that point to (lm,cc)=>content
    var lm: element_lessonModule | null;
    if (this.lessonModules != null)
      if (this.lessonModules[this.lmIndex] != null) {
        lm = this.lessonModules[this.lmIndex];

        if (this.lessonModules[this.lmIndex].contentClusters == null) {
          this.lessonModules[this.lmIndex].contentClusters = [];
        }

        var db_cc: element_contentCluster[] | null;
        if (this.lessonModules[this.lmIndex].contentClusters != null) {
          db_cc = this.lessonModules[this.lmIndex].contentClusters;



          if (db_cc != null) {
            var db_content: element_content[] | null;

            if (db_cc[this.ccIndex].content == null)
              db_cc[this.ccIndex].content = [];

            if (db_cc[this.ccIndex].content != null) {
              db_content = db_cc[this.ccIndex].content;

              if (db_content != null)
                db_content.push(content);
            }
          }

        }
      }

    this.cInput_Title = "";
    this.cInput_Description = "";
    this.cInput_GetURL = "";
    this.cInput_Tags = "";
    this.cInput_Header = "";
  }

  CloseContentEditorAndCancel() {
    this.cInput_Title = "";
    this.cInput_Description = "";
    this.cInput_GetURL = "";
    this.cInput_Tags = "";
    this.cInput_Header = "";

    this.editing = false;
  }

}
