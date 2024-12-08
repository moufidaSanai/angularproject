import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessorAddComponent } from './lessor-add.component';

describe('LessorAddComponent', () => {
  let component: LessorAddComponent;
  let fixture: ComponentFixture<LessorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
