import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) } ,
  { path:'etudiant',loadChildren:()=>import('./etudiant/etudiant.module').then(m=>m.EtudiantModule) } ,
  { path:'enseignant',loadChildren:()=>import('./enseignant/enseignant.module').then(m=>m.EnseignantModule) } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
