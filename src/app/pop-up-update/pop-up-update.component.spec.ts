import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpUpdateComponent } from './pop-up-update.component';

describe('PopUpUpdateComponent', () => {
  let component: PopUpUpdateComponent;
  let fixture: ComponentFixture<PopUpUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpUpdateComponent]
    });
    fixture = TestBed.createComponent(PopUpUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
