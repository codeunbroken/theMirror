import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAnnouncementComponent } from './forum-announcement.component';

describe('ForumAnnouncementComponent', () => {
  let component: ForumAnnouncementComponent;
  let fixture: ComponentFixture<ForumAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
