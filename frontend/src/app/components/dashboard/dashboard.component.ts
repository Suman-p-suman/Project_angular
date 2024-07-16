import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SurveyService } from '../Survey.Service';
import { DashboardService } from '../../service/dashboard.service';
import { OwnerService } from '../../owner.service';
import { CreateSurvey } from '../../service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: CreateSurvey[] = [];
  email: string | undefined;
  errorMessage: string | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private surveyService: DashboardService,
    private ownerService: OwnerService
  ) {}

  ngOnInit(): void {
    this.email = this.ownerService.getEmail();
    if (this.email) {
      this.getUserData(this.email);
    }
    alert(this.ownerService);
  }

  getUserData(email: string): void {
    this.surveyService.getSurveysByEmail(this.ownerService).subscribe(
      response => {
        this.data = response; 
        console.log(this.data);
      },
      error => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'An error occurred: ' + error.message;
      }
    );
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
