import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularMoviePage } from './popular-movie.page';

const routes: Routes = [
  {
    path: '',
    component: PopularMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularMoviePageRoutingModule {}
