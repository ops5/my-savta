import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeopleListPageRoutingModule } from './people-list-routing.module';

import { PeopleListPage } from './people-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeopleListPageRoutingModule
  ],
  declarations: [PeopleListPage]
})
export class PeopleListPageModule {}
