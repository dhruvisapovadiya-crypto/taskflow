import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSprintPlanner } from './ai-sprint-planner';

describe('AiSprintPlanner', () => {
  let component: AiSprintPlanner;
  let fixture: ComponentFixture<AiSprintPlanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSprintPlanner],
    }).compileComponents();

    fixture = TestBed.createComponent(AiSprintPlanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
