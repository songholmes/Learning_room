import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OiappDetailComponent } from './oiapp-detail.component';

describe('OiappDetailComponent', () => {
  let component: OiappDetailComponent;
  let fixture: ComponentFixture<OiappDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OiappDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OiappDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
