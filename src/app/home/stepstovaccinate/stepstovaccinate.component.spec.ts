import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepstovaccinateComponent } from './stepstovaccinate.component';

describe('StepstovaccinateComponent', () => {
  let component: StepstovaccinateComponent;
  let fixture: ComponentFixture<StepstovaccinateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepstovaccinateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepstovaccinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
