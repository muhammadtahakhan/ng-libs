import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainModalComponent } from './curtain-modal.component';

describe('CurtainModalComponent', () => {
  let component: CurtainModalComponent;
  let fixture: ComponentFixture<CurtainModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtainModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
