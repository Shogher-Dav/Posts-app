import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostModalComponent } from './update-post-modal.component';

describe('UpdatePostModalComponent', () => {
  let component: UpdatePostModalComponent;
  let fixture: ComponentFixture<UpdatePostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
