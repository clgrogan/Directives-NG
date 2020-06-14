import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrackByComponent } from './ng-track-by.component';

describe('NgTrackByComponent', () => {
  let component: NgTrackByComponent;
  let fixture: ComponentFixture<NgTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
