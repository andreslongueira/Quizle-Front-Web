import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ArtQuestionComponent } from './components/questions-component/art-question/art-question.component';
import { GeographyQuestionComponent } from './components/questions-component/geography-question/geography-question.component';
import { HistoryQuestionComponent } from './components/questions-component/history-question/history-question.component';
import { ScienceQuestionComponent } from './components/questions-component/science-question/science-question.component';
import { SportsQuestionComponent } from './components/questions-component/sports-question/sports-question.component';


const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
