import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRatingQuestionComponent } from './create-rating-question.component';

describe('CreateRatingQuestionComponent', () => {
  let component: CreateRatingQuestionComponent;
  let fixture: ComponentFixture<CreateRatingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRatingQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRatingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
