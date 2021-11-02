import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanlindromeComponent } from './panlindrome.component';

describe('PanlindromeComponent', () => {
  let component: PanlindromeComponent;
  let fixture: ComponentFixture<PanlindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanlindromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanlindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
