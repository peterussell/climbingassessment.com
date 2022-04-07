import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentComponent } from "src/app/assessment/assessment.component";
import { NotFoundComponent } from "src/app/not-found/not-found.component";
import { ResultsComponent } from "src/app/results/results.component";

const routes: Routes = [
  { path: 'assessment', component: AssessmentComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: '/assessment', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
