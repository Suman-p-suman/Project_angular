import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { FormsModule } from '@angular/forms';
import { QuestionTypeSelectionComponent } from './components/question-type-selection/question-type-selection.component';
import { CreateSingleQuestionComponent } from './components/create-single-question/create-single-question.component';
import { CreateMultiQuestionComponent } from './components/create-multi-question/create-multi-question.component';
import { CreateOpenEndedQuestionComponent } from './components/create-open-ended-question/create-open-ended-question.component';
import { CreateRatingQuestionComponent } from './components/create-rating-question/create-rating-question.component';
import { HttpClientModule } from '@angular/common/http';
import { WordcloudComponent } from './components/wordcloud/wordcloud.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { IgxLegendModule, IgxCategoryChartModule } from 'igniteui-angular-charts';
import { RatingQuestionComponent } from './components/rating-ques/rating-ques.component';
import { SingleQuestionComponent } from './components/single-question/single-question.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { OpenEndedQuestionComponent } from './components/open-ended-question/open-ended-question.component';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateSurveyComponent,
    QuestionTypeSelectionComponent,
    CreateSingleQuestionComponent,
    CreateMultiQuestionComponent,
    CreateOpenEndedQuestionComponent,
    CreateRatingQuestionComponent,
    WordcloudComponent,
    UserChartComponent,
    RatingQuestionComponent,
    SingleQuestionComponent,
    OpenEndedQuestionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    HighchartsChartModule,
    IgxLegendModule,
    IgxCategoryChartModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
