import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentClusterComponent } from './content-cluster.component';

describe('ContentClusterComponent', () => {
  let component: ContentClusterComponent;
  let fixture: ComponentFixture<ContentClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentClusterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
