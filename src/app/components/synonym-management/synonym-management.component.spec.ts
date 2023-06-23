import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymManagementComponent } from './synonym-management.component';

describe('SynonymManagementComponent', () => {
  let component: SynonymManagementComponent;
  let fixture: ComponentFixture<SynonymManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynonymManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynonymManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
