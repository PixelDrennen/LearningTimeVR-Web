import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonModuleListComponentComponent } from './lesson-module-list-component.component';

describe('LessonModuleListComponentComponent', () => {
  let component: LessonModuleListComponentComponent;
  let fixture: ComponentFixture<LessonModuleListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonModuleListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonModuleListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
