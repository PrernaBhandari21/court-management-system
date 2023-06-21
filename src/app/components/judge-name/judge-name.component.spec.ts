import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeNameComponent } from './judge-name.component';

describe('JudgeNameComponent', () => {
  let component: JudgeNameComponent;
  let fixture: ComponentFixture<JudgeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgeNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
