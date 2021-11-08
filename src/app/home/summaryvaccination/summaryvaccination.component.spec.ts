import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryvaccinationComponent } from './summaryvaccination.component';

describe('SummaryvaccinationComponent', () => {
  let component: SummaryvaccinationComponent;
  let fixture: ComponentFixture<SummaryvaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryvaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryvaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
