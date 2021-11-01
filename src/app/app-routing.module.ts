import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let redirectUrl = '/collections';
const routes: Routes = [
  { path: '', redirectTo: redirectUrl, pathMatch: 'full' },
  { path: 'collections', loadChildren: () => import(`./modules/search/search.module`).then(
    module => module.SearchModule
  )},
  { path: 'collections/details', loadChildren: () => import(`./modules/image-details/image-details.module`).then(
    module => module.ImageDetailsModule
  )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
