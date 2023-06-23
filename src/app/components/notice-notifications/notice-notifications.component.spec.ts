import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeNotificationsComponent } from './notice-notifications.component';

describe('NoticeNotificationsComponent', () => {
  let component: NoticeNotificationsComponent;
  let fixture: ComponentFixture<NoticeNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
