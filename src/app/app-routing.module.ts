import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';


import { ArtQuestionComponent } from './components/questions-component/art-question/art-question.component';
import { GeographyQuestionComponent } from './components/questions-component/geography-question/geography-question.component';
import { HistoryQuestionComponent } from './components/questions-component/history-question/history-question.component';
import { ScienceQuestionComponent } from './components/questions-component/science-question/science-question.component';
import { SportsQuestionComponent } from './components/questions-component/sports-question/sports-question.component';
import { ResultComponentComponent } from './components/result-component/result-component.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'geography',
    component: GeographyQuestionComponent,
    pathMatch: 'full'
  },
  {
    path: 'art',
    component: ArtQuestionComponent,
    pathMatch: 'full'
  },
  {
    path: 'science',
    component: ScienceQuestionComponent,
    pathMatch: 'full'
  },
  {
    path: 'history',
    component: HistoryQuestionComponent,
    pathMatch: 'full'
  },
  {
    path: 'sports',
    component: SportsQuestionComponent,
    pathMatch: 'full'
  },
  {
    path: 'result',
    component: ResultComponentComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
