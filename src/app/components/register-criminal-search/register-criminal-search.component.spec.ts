import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCriminalSearchComponent } from './register-criminal-search.component';

describe('RegisterCriminalSearchComponent', () => {
  let component: RegisterCriminalSearchComponent;
  let fixture: ComponentFixture<RegisterCriminalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCriminalSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCriminalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
