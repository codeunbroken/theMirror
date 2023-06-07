import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumWelcomePageComponent } from './forum-welcome-page.component';

describe('ForumWelcomePageComponent', () => {
  let component: ForumWelcomePageComponent;
  let fixture: ComponentFixture<ForumWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
