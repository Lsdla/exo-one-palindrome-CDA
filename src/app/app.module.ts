import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanlindromeComponent } from './panlindrome/panlindrome.component';
import { ChaineCaracteresComponent } from './chaine-caracteres/chaine-caracteres.component';
import { ApiPublicComponent } from './api-public/api-public.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PanlindromeComponent,
    ChaineCaracteresComponent,
    ApiPublicComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
