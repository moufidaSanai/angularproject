import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailListComponent } from './feature-detail-list.component';

describe('FeatureDetailListComponent', () => {
  let component: FeatureDetailListComponent;
  let fixture: ComponentFixture<FeatureDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDetailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
