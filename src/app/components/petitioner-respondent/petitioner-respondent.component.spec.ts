import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionerRespondentComponent } from './petitioner-respondent.component';

describe('PetitionerRespondentComponent', () => {
  let component: PetitionerRespondentComponent;
  let fixture: ComponentFixture<PetitionerRespondentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionerRespondentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitionerRespondentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
