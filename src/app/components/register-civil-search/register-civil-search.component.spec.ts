import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCivilSearchComponent } from './register-civil-search.component';

describe('RegisterCivilSearchComponent', () => {
  let component: RegisterCivilSearchComponent;
  let fixture: ComponentFixture<RegisterCivilSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCivilSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCivilSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
