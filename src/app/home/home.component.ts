import { Component } from '@angular/core';
import { LessonModuleService } from 'app/services/lesson-module.service';
import { UploadService } from 'app/uploads/shared/upload.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

export interface UploadFile {
  name: string;
  lastModifiedDate: Date;
  size: any;
  type: any;
  file: File;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public uploadService: UploadService, public authService:AuthService) {

  }

  // input_fileToUpload: File;
  uploadForm: FormGroup = new FormGroup({
    input_file: new FormControl()
  });

  fileData: File;

  onFileSelected(event: any) {
    if (event.target.files == null || event.target.files.length == 0) {
      console.log("Could not upload file.");
      return;
    }

    console.log(event.target.files);
    let file: File = event.target.files[0];

    this.fileData = file;
  }

  Upload() {
    // if (event.target.file != null) {
    console.log(this.uploadForm.value);
    this.uploadService.pushUpload(this.authService.user.uid, this.fileData);
    
    // }
    // this.uploadService.pushUpload(this.input_fileToUpload);
  }



}
