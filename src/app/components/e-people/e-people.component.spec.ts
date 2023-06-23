import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPeopleComponent } from './e-people.component';

describe('EPeopleComponent', () => {
  let component: EPeopleComponent;
  let fixture: ComponentFixture<EPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
