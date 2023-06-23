import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEPersonComponent } from './add-edit-eperson.component';

describe('AddEditEPersonComponent', () => {
  let component: AddEditEPersonComponent;
  let fixture: ComponentFixture<AddEditEPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
