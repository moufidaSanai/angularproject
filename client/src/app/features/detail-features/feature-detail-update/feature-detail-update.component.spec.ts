import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailUpdateComponent } from './feature-detail-update.component';

describe('FeatureDetailUpdateComponent', () => {
  let component: FeatureDetailUpdateComponent;
  let fixture: ComponentFixture<FeatureDetailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDetailUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
