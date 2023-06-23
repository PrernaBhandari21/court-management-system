import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTextSearchComponent } from './free-text-search.component';

describe('FreeTextSearchComponent', () => {
  let component: FreeTextSearchComponent;
  let fixture: ComponentFixture<FreeTextSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeTextSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeTextSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
