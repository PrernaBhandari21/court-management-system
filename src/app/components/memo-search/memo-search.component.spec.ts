import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoSearchComponent } from './memo-search.component';

describe('MemoSearchComponent', () => {
  let component: MemoSearchComponent;
  let fixture: ComponentFixture<MemoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
