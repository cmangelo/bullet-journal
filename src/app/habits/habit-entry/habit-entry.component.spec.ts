import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitEntryComponent } from './habit-entry.component';

describe('HabitEntryComponent', () => {
  let component: HabitEntryComponent;
  let fixture: ComponentFixture<HabitEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
