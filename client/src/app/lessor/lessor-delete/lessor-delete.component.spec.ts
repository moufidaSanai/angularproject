import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessorDeleteComponent } from './lessor-delete.component';

describe('LessorDeleteComponent', () => {
  let component: LessorDeleteComponent;
  let fixture: ComponentFixture<LessorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessorDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
