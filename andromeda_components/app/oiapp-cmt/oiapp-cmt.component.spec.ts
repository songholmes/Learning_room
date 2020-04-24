import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OiappCmtComponent } from './oiapp-cmt.component';

describe('OiappCmtComponent', () => {
  let component: OiappCmtComponent;
  let fixture: ComponentFixture<OiappCmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OiappCmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OiappCmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
