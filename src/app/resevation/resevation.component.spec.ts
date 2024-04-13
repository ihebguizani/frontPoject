import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResevationComponent } from './resevation.component';

describe('ResevationComponent', () => {
  let component: ResevationComponent;
  let fixture: ComponentFixture<ResevationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResevationComponent]
    });
    fixture = TestBed.createComponent(ResevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
