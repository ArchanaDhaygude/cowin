import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationtrendComponent } from './vaccinationtrend.component';

describe('VaccinationtrendComponent', () => {
  let component: VaccinationtrendComponent;
  let fixture: ComponentFixture<VaccinationtrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationtrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationtrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
