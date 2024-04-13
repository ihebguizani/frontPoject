import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoanByUserComponent } from './list-loan-by-user.component';

describe('ListLoanByUserComponent', () => {
  let component: ListLoanByUserComponent;
  let fixture: ComponentFixture<ListLoanByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLoanByUserComponent]
    });
    fixture = TestBed.createComponent(ListLoanByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
