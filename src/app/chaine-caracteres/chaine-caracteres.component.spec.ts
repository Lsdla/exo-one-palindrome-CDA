import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaineCaracteresComponent } from './chaine-caracteres.component';

describe('ChaineCaracteresComponent', () => {
  let component: ChaineCaracteresComponent;
  let fixture: ComponentFixture<ChaineCaracteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaineCaracteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaineCaracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
