import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/main-home/main-home.module').then(m => m.MainHomeModule) }, 
  { path: 'resume', loadChildren: () => import('./features/resume/resume-routing.module').then(m => m.ResumeRoutingModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
