import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceEmailsComponent } from './advance-emails.component';

describe('AdvanceEmailsComponent', () => {
  let component: AdvanceEmailsComponent;
  let fixture: ComponentFixture<AdvanceEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
