import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private surveyName: string = '';
  private label: string = '';
  private uptime: string='';
  private questions: any[] = [];

  // Getter and setter for surveyName
  getSurveyName(): string {
    return this.surveyName;
  }

  setSurveyName(name: string): void {
    this.surveyName = name;
  }

  // Getter and setter for surveyDesc
  getSurveyDesc(): string {
    return this.label;
  }

  setSurveyDesc(desc: string): void {
    this.label = desc;
  }

  // Getter and setter for uptime
  getUptime(): string {
    return this.uptime;
  }

  setUptime(time: string): void {
    this.uptime = time;
  }

  // Methods for questionList
  addQuestion(data: any): void {
    this.questions.push(data);
  }

  getQuestions(): any[] {
    return this.questions;
  }

  clearQuestions(): void {
    this.questions = [];
  }
}
