import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionTypeSelectionComponent } from './components/question-type-selection/question-type-selection.component';
import { CreateSingleQuestionComponent } from './components/create-single-question/create-single-question.component';
import { CreateMultiQuestionComponent } from './components/create-multi-question/create-multi-question.component';
import { CreateOpenEndedQuestionComponent } from './components/create-open-ended-question/create-open-ended-question.component';
import { CreateRatingQuestionComponent } from './components/create-rating-question/create-rating-question.component';
import { HttpClientModule } from '@angular/common/http';
import { WordcloudComponent } from './components/wordcloud/wordcloud.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { LoginComponent } from './components/login/login.component';
import { SingleQuestionComponent } from './components/single-question/single-question.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'question-type-selection', component: QuestionTypeSelectionComponent },
  { path: 'create-single-question', component: CreateSingleQuestionComponent },
  { path: 'create-multi-question', component: CreateMultiQuestionComponent },
  { path: 'create-open-ended-question', component: CreateOpenEndedQuestionComponent },
  { path: 'create-rating-question', component: CreateRatingQuestionComponent },
  { path: 'word-cloud', component: WordcloudComponent} ,
{path:'chart',component:UserChartComponent},
{path:'dashboard',component:DashboardComponent},
{path:'single-question',component:SingleQuestionComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
