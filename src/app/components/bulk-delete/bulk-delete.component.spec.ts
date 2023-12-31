import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkDeleteComponent } from './bulk-delete.component';

describe('BulkDeleteComponent', () => {
  let component: BulkDeleteComponent;
  let fixture: ComponentFixture<BulkDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
