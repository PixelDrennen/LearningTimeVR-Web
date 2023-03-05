import { TestBed } from '@angular/core/testing';

import { LessonModuleService } from './lesson-module.service';

describe('LessonModuleService', () => {
  let service: LessonModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
