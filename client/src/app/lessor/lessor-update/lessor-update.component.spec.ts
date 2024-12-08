import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessorUpdateComponent } from './LessorUpdateComponent';

describe('LessorUpdateComponent', () => {
  let component: LessorUpdateComponent;
  let fixture: ComponentFixture<LessorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessorUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
