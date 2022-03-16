import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdControlComponent } from './pwd-control.component';

describe('PwdControlComponent', () => {
  let component: PwdControlComponent;
  let fixture: ComponentFixture<PwdControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwdControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
