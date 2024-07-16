
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:9090/api/users/get_surveys';

  constructor(private http: HttpClient) { }

  getSurveysByEmail(ownerService : any): Observable<CreateSurvey[]> {
    return this.http.get<CreateSurvey[]>(`${this.apiUrl}`);
  }
}


export interface CreateSurvey {
  id: string;
  email: string;
  surveyId: string | null;
  surveyName: string;
  surveyDescription: string;
  uptime: number;
  questions: Question[];
}

export interface Question {
  id: string | null;
  label: string | null;
  type: string | null;
  options: string[];
}
