import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDeleteComponent } from './features-delete.component';

describe('FeaturesDeleteComponent', () => {
  let component: FeaturesDeleteComponent;
  let fixture: ComponentFixture<FeaturesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
