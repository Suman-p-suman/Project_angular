import { Component } from '@angular/core';

@Component({
  selector: 'app-open-ended-question',
  templateUrl: './open-ended-question.component.html',
  styleUrl: './open-ended-question.component.css'
})
export class OpenEndedQuestionComponent {
  save() {
    // Implement save logic here
    console.log('Response saved');
  }
}
