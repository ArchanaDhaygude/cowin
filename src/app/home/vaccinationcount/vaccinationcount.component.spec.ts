import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationcountComponent } from './vaccinationcount.component';

describe('VaccinationcountComponent', () => {
  let component: VaccinationcountComponent;
  let fixture: ComponentFixture<VaccinationcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
