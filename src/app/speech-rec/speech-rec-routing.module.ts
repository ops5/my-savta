import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeechRecPage } from './speech-rec.page';

const routes: Routes = [
  {
    path: '',
    component: SpeechRecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeechRecPageRoutingModule {}
