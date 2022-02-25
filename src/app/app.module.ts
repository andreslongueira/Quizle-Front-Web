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
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ResultComponentComponent } from './components/result-component/result-component.component';


//Services

import { RulesService } from './services/rules.service';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    ScienceQuestionComponent,
    ArtQuestionComponent,
    HistoryQuestionComponent,
    GeographyQuestionComponent,
    SportsQuestionComponent,
    HomeComponentComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    QuestionService,
    RulesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
