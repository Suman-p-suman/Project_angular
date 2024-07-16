import { Component } from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrl: './single-question.component.css'
})
export class SingleQuestionComponent {
  responses = ['Response 1', 'Response 2', 'Response 3', 'Response 4', 'Response 5'];

  save() {
    // Implement save logic here
    console.log('Response saved');
  }
}
