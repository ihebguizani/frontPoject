import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLoanComponent } from './liste-loan.component';

describe('ListeLoanComponent', () => {
  let component: ListeLoanComponent;
  let fixture: ComponentFixture<ListeLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeLoanComponent]
    });
    fixture = TestBed.createComponent(ListeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
