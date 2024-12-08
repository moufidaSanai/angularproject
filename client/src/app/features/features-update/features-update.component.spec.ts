import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesUpdateComponent } from './features-update.component';

describe('FeaturesUpdateComponent', () => {
  let component: FeaturesUpdateComponent;
  let fixture: ComponentFixture<FeaturesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
