import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookAdminComponent } from './list-book-admin.component';

describe('ListBookAdminComponent', () => {
  let component: ListBookAdminComponent;
  let fixture: ComponentFixture<ListBookAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBookAdminComponent]
    });
    fixture = TestBed.createComponent(ListBookAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
