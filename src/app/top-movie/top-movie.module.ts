import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopMoviePageRoutingModule } from './top-movie-routing.module';

import { TopMoviePage } from './top-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopMoviePageRoutingModule
  ],
  declarations: [TopMoviePage]
})
export class TopMoviePageModule {}
