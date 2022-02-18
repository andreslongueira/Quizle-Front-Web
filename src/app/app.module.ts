import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { ScienceQuestionComponent } from './components/questions-component/science-question/science-question.component';
import { ArtQuestionComponent } from './components/questions-component/art-question/art-question.component';
import { HistoryQuestionComponent } from './components/questions-component/history-question/history-question.component';
import { GeographyQuestionComponent } from './components/questions-component/geography-question/geography-question.component';
import { SportsQuestionComponent } from './components/questions-component/sports-question/sports-question.component';


//Services
import { QuestionAdminService } from './services/question.admin.service';

@NgModule({
  declarations: [
    AppComponent,
    ScienceQuestionComponent,
    ArtQuestionComponent,
    HistoryQuestionComponent,
    GeographyQuestionComponent,
    SportsQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    QuestionAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
