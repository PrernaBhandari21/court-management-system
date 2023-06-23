import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsSearchComponent } from './acts-search.component';

describe('ActsSearchComponent', () => {
  let component: ActsSearchComponent;
  let fixture: ComponentFixture<ActsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
