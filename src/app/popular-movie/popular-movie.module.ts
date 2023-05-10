import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularMoviePageRoutingModule } from './popular-movie-routing.module';

import { PopularMoviePage } from './popular-movie.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularMoviePageRoutingModule,
    HttpClientModule
  ],
  declarations: [PopularMoviePage]
})
export class PopularMoviePageModule {}
