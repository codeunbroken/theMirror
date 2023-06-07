import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPublicComponent } from './forum-public.component';

describe('ForumPublicComponent', () => {
  let component: ForumPublicComponent;
  let fixture: ComponentFixture<ForumPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
