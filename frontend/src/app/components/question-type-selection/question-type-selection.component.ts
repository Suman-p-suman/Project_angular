import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionTypeService } from '../question-type.service';  // Adjust the path as necessary

@Component({
  selector: 'app-question-type-selection',
  templateUrl: './question-type-selection.component.html',
  styleUrls: ['./question-type-selection.component.css']  // Note the correct property name is styleUrls
})
export class QuestionTypeSelectionComponent {
  selectedQuestionType: string = '';

  constructor(private router: Router, private questionTypeService: QuestionTypeService) {}

  onSaveAndContinue() {
    if (!this.selectedQuestionType) {
      alert('Please select a question type.');
      return;
    }

    // Store the selected question type
    this.questionTypeService.setQuestionType(this.selectedQuestionType);

    // Navigate based on the selected question type
    switch (this.selectedQuestionType) {
      case 'single':
        this.router.navigate(['create-single-question']);
        break;
      case 'multi':
        this.router.navigate(['create-multi-question']);
        break;
      case 'open-ended':
        this.router.navigate(['create-open-ended-question']);
        break;
      case 'rating':
        this.router.navigate(['create-rating-question']);
        break;
      default:
        alert('Please select a question type.');
    }
  }

  onReset() {
    this.selectedQuestionType = '';
  }
}
