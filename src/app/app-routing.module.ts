import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'speech-rec',
    pathMatch: 'full'
  },
  {
    path: 'speech-rec',
    loadChildren: () => import('./speech-rec/speech-rec.module').then( m => m.SpeechRecPageModule)
  },
  {
    path: 'people-list',
    loadChildren: () => import('./people-list/people-list.module').then( m => m.PeopleListPageModule)
  },
  {
    path: 'people-details',
    loadChildren: () => import('./people-details/people-details.module').then( m => m.PeopleDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
