import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDeleteBookComponent } from './pop-up-delete-book.component';

describe('PopUpDeleteBookComponent', () => {
  let component: PopUpDeleteBookComponent;
  let fixture: ComponentFixture<PopUpDeleteBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpDeleteBookComponent]
    });
    fixture = TestBed.createComponent(PopUpDeleteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
