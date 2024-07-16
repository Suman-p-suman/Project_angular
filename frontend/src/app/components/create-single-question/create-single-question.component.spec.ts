import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleQuestionComponent } from './create-single-question.component';

describe('CreateSingleQuestionComponent', () => {
  let component: CreateSingleQuestionComponent;
  let fixture: ComponentFixture<CreateSingleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSingleQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSingleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
