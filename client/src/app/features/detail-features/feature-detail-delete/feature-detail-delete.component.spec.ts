import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailDeleteComponent } from './feature-detail-delete.component';

describe('FeatureDetailDeleteComponent', () => {
  let component: FeatureDetailDeleteComponent;
  let fixture: ComponentFixture<FeatureDetailDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDetailDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDetailDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
