import { Component } from '@angular/core';
import { LessonModuleService } from 'app/services/lesson-module.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public lessonModuleService: LessonModuleService){

  }

}
