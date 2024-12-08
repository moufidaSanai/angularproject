import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailAddComponent } from './feature-detail-add.component';

describe('FeatureDetailAddComponent', () => {
  let component: FeatureDetailAddComponent;
  let fixture: ComponentFixture<FeatureDetailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDetailAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
