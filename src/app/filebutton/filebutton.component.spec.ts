import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilebuttonComponent } from './filebutton.component';

describe('FilebuttonComponent', () => {
  let component: FilebuttonComponent;
  let fixture: ComponentFixture<FilebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
