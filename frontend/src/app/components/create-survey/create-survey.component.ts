// create-survey.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../Survey.Service';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent {
  survey = {
    name: '',
    details: '',
    minutes: ''
  };

  constructor(private router: Router, private surveyService: SurveyService) {}

  onSaveAndContinue() {
    if (!this.survey.name.trim()) {
      alert('Survey name is required.');
      return;
    }

    this.surveyService.setSurveyName(this.survey.name);
    this.surveyService.setSurveyDesc(this.survey.details);
    this.surveyService.setUptime(this.survey.minutes);
    this.router.navigate(['/question-type-selection']);
  }

  onReset() {
    this.survey = {
      name: '',
      details: '',
      minutes: ''
    };
  }
}
