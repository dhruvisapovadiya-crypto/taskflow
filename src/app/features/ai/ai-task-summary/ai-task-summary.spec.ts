import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTaskSummary } from './ai-task-summary';

describe('AiTaskSummary', () => {
  let component: AiTaskSummary;
  let fixture: ComponentFixture<AiTaskSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTaskSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(AiTaskSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
