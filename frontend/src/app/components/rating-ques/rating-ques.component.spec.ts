import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingQuestionComponent } from './rating-ques.component';

describe('RatingQuesComponent', () => {
  let component: RatingQuestionComponent;
  let fixture: ComponentFixture<RatingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
