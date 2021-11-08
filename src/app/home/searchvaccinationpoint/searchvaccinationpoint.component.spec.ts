import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvaccinationpointComponent } from './searchvaccinationpoint.component';

describe('SearchvaccinationpointComponent', () => {
  let component: SearchvaccinationpointComponent;
  let fixture: ComponentFixture<SearchvaccinationpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchvaccinationpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchvaccinationpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
