import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseissueComponent } from './raiseissue.component';

describe('RaiseissueComponent', () => {
  let component: RaiseissueComponent;
  let fixture: ComponentFixture<RaiseissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseissueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
