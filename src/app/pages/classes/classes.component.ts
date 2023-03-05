import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { LessonModuleService } from 'app/services/lesson-module.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  constructor(public authService: AuthService, public lessonModuleService: LessonModuleService) {

  }

  ngOnInit(): void {

  }
}
