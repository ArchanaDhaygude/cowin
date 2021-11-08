import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpartnerComponent } from './ourpartner.component';

describe('OurpartnerComponent', () => {
  let component: OurpartnerComponent;
  let fixture: ComponentFixture<OurpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurpartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
