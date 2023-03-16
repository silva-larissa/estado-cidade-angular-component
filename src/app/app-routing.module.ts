import { TesteComponent } from './teste/teste.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cidadeestado',
    component: TesteComponent
  },
  {
    path: '**',
    redirectTo: 'cidadeestado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
