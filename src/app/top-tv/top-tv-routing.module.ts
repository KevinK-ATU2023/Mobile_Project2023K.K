import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopTvPage } from './top-tv.page';

const routes: Routes = [
  {
    path: '',
    component: TopTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopTvPageRoutingModule {}
