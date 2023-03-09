import { Component, OnInit } from '@angular/core';
import { element_lessonModule } from 'app/models/element_lessonModule';
import { AuthService } from 'app/services/auth.service';
import { FirestoreService } from 'app/services/firestore.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
    '[style.overflow]': '"hidden"'
  }
})
export class ClassesComponent implements OnInit {
  
  lessonModules: element_lessonModule[] | null = null;

  constructor(public authService: AuthService, public firestoreService: FirestoreService) {

  }

  ngOnInit(): void {

  }

  trim(input: string) {
    return input.slice(0, 50).trim() + "...";
  }
  deleteClass(id: string) {
    this.firestoreService.deleteClass(id);
  }
}
