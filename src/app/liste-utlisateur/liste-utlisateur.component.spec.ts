import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUtlisateurComponent } from './liste-utlisateur.component';

describe('ListeUtlisateurComponent', () => {
  let component: ListeUtlisateurComponent;
  let fixture: ComponentFixture<ListeUtlisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeUtlisateurComponent]
    });
    fixture = TestBed.createComponent(ListeUtlisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
