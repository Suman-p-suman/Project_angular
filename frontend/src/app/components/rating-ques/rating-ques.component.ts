import { Component } from '@angular/core';
 
@Component({
  selector: 'app-rating-question',
  templateUrl: './rating-ques.component.html',
  styleUrl: './rating-ques.component.css'
})
export class RatingQuestionComponent {
  ratingOptions = [1, 2, 3, 4, 5];
}