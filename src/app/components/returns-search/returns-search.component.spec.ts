import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsSearchComponent } from './returns-search.component';

describe('ReturnsSearchComponent', () => {
  let component: ReturnsSearchComponent;
  let fixture: ComponentFixture<ReturnsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
