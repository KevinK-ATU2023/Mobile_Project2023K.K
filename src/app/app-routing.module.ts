import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'popular-movie',
    loadChildren: () => import('./popular-movie/popular-movie.module').then( m => m.PopularMoviePageModule)
  },
  {
    path: 'top-movie',
    loadChildren: () => import('./top-movie/top-movie.module').then( m => m.TopMoviePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
