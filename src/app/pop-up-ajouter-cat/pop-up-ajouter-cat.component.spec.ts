import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAjouterCatComponent } from './pop-up-ajouter-cat.component';

describe('PopUpAjouterCatComponent', () => {
  let component: PopUpAjouterCatComponent;
  let fixture: ComponentFixture<PopUpAjouterCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpAjouterCatComponent]
    });
    fixture = TestBed.createComponent(PopUpAjouterCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
