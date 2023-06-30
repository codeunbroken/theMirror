import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllForumsComponent } from './all-forums.component';

describe('AllForumsComponent', () => {
  let component: AllForumsComponent;
  let fixture: ComponentFixture<AllForumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllForumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
