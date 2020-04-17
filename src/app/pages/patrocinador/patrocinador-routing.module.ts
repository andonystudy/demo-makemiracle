import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatrocinadorComponent } from './patrocinador.component';


const routes: Routes = [
  { path: '', component: PatrocinadorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrocinadorRoutingModule { }
