import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeechRecPageRoutingModule } from './speech-rec-routing.module';

import { SpeechRecPage } from './speech-rec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeechRecPageRoutingModule
  ],
  declarations: [SpeechRecPage]
})
export class SpeechRecPageModule {}
