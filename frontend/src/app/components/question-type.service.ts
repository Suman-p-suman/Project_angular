import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {
  private type: string = '';
  private label: string = '';
  private responses: string[] = [];

  setQuestionType(type: string): void {
    this.type = type;
  }

  getQuestionType(): string {
    return this.type;
  }

  setQuestionLabel(label: string): void {
    this.label = label;
  }

  getQuestionLabel(): string {
    return this.label;
  }

  setResponses(responses: string[]): void {
    this.responses = responses;
  }
  setResponsesRating(responses: string): void {
    this.responses[0] = responses;
  }

  getResponses(): string[] {
    return this.responses;
  }
  getResponsesRating(): string {
    return this.responses[0];
  }

  addResponse(response: string): void {
    this.responses.push(response);
  }
}
