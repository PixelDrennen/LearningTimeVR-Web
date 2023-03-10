import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, UploadTaskSnapshot, FirebaseStorage } from 'firebase/storage';
import { async } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {


  constructor() { }

  firebaseApp: any = firebase.getApp();
  storage_uploads: any = getStorage(this.firebaseApp, "gs://learningtimevr-uploads");
  storageRef: any = ref(this.storage_uploads);
  filesRef: any = ref(this.storageRef, 'files');
  urlResult: string;

  async pushUpload(prefix: string | null, file: File): Promise<string> {
    if (prefix == null) prefix = "error_no-prefix";
    let uploadRef: any = ref(this.filesRef, (prefix + "/" + "file:" + file.name));
    let uploadTask: any = uploadBytesResumable(uploadRef, file);

    return await new Promise((resolve, reject) => {
      uploadTask.on('state_changed',
        (snapshot: UploadTaskSnapshot) => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // update progress bar here
          console.log(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log("Paused upload");
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }

          console.log("Uploaded " + file.name);
        },
        (error: any) => {
          reject(error);
          console.log(error.message);
        },
        async () => {
          const imgURL = await getDownloadURL(uploadTask.snapshot.ref);
          // console.log("file available at ", downloadURL);
          // this.urlResult = downloadURL;
          resolve(imgURL);
        });
    });
  }
}
