import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionTypeService } from '../question-type.service';
import { SurveyService } from '../Survey.Service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-create-open-ended-question',
  templateUrl: './create-open-ended-question.component.html',
  styleUrl: './create-open-ended-question.component.css'
})
export class CreateOpenEndedQuestionComponent {
  question = {
    questionText: ''
  };
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private questionTypeService: QuestionTypeService,
    private surveyService: SurveyService,
    private ownerService: OwnerService
  ) {}

  // constructor(private router: Router, private questionTypeService: QuestionTypeService,private surveyService: SurveyService) {}
  onSaveAndContinue() {
    this.questionTypeService.setQuestionLabel(this.question.questionText);
    
   const Question={questionType:this.questionTypeService.getQuestionType,questionLabel:this.question.questionText}
    this.surveyService.addQuestion(Question);
    this.router.navigate(['/question-type-selection']);
  }

  onFinish() {
    this.questionTypeService.setQuestionLabel(this.question.questionText);
    

    const question = {
      type: this.questionTypeService.getQuestionType(),  
      label: this.question.questionText,
      option:null
    };

    this.surveyService.addQuestion(question);
    const survey = {
      email: this.ownerService.getEmail(),  
      surveyName: this.surveyService.getSurveyName(),  
      surveyDescription: this.surveyService.getSurveyDesc(),  
      uptime: this.surveyService.getUptime(),  
      questions: this.surveyService.getQuestions()  
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:9090/api/users/create_user', survey, { headers, responseType: 'text' })
      .subscribe(
        response => {
          alert(response); 
          this.router.navigate(['/create-survey']);
        },
        error => {
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else {
            this.errorMessage = 'An error occurred: ' + error.message;
          }
        }
      );
  }

  onReset() {
    this.question = {
      questionText: ''
    };
  }
}
