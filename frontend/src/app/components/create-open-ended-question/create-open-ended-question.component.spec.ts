import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpenEndedQuestionComponent } from './create-open-ended-question.component';

describe('CreateOpenEndedQuestionComponent', () => {
  let component: CreateOpenEndedQuestionComponent;
  let fixture: ComponentFixture<CreateOpenEndedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOpenEndedQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOpenEndedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
