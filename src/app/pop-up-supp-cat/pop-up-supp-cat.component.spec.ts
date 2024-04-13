import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSuppCatComponent } from './pop-up-supp-cat.component';

describe('PopUpSuppCatComponent', () => {
  let component: PopUpSuppCatComponent;
  let fixture: ComponentFixture<PopUpSuppCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpSuppCatComponent]
    });
    fixture = TestBed.createComponent(PopUpSuppCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
