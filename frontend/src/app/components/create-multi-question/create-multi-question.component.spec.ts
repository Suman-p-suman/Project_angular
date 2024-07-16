import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultiQuestionComponent } from './create-multi-question.component';

describe('CreateMultiQuestionComponent', () => {
  let component: CreateMultiQuestionComponent;
  let fixture: ComponentFixture<CreateMultiQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMultiQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMultiQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
