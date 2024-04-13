import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResByUserComponent } from './list-res-by-user.component';

describe('ListResByUserComponent', () => {
  let component: ListResByUserComponent;
  let fixture: ComponentFixture<ListResByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResByUserComponent]
    });
    fixture = TestBed.createComponent(ListResByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
