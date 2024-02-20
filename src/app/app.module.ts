import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { EtudiantModule } from './etudiant/etudiant.module';
import { EnseignantModule } from './enseignant/enseignant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EtudiantModule,
    EnseignantModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
