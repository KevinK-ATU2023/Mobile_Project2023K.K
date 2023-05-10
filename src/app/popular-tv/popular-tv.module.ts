import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularTvPageRoutingModule } from './popular-tv-routing.module';

import { PopularTvPage } from './popular-tv.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularTvPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PopularTvPage]
})
export class PopularTvPageModule {}
