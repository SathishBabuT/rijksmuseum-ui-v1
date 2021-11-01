import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailsMainComponent } from './image-details-main/image-details-main.component';

const routes: Routes = [
  {path: '', component: ImageDetailsMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageDetailsRoutingModule { }
