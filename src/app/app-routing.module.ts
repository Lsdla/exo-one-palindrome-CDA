import { HomeComponent } from './home/home.component';
import { ApiPublicComponent } from './api-public/api-public.component';
import { ChaineCaracteresComponent } from './chaine-caracteres/chaine-caracteres.component';
import { PanlindromeComponent } from './panlindrome/panlindrome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'palindrome', component:PanlindromeComponent
  },
  {
    path:'caractere', component:ChaineCaracteresComponent
  },
  {
    path:'api', component:ApiPublicComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
