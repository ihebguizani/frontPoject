import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjouterBookComponent } from './pop-up-ajouter-book.component';

describe('PopUpAjouterBookComponent', () => {
  let component: PopUpAjouterBookComponent;
  let fixture: ComponentFixture<PopUpAjouterBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpAjouterBookComponent]
    });
    fixture = TestBed.createComponent(PopUpAjouterBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
