import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageDetailsMainComponent } from './image-details-main/image-details-main.component';
import { ImageDetailsRoutingModule } from './image-details-routing.module';
import { ImageDetailsViewComponent } from './image-details-view/image-details-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ImageDetailsMainComponent,
    ImageDetailsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ImageDetailsRoutingModule,
    SharedModule
  ],
  exports:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageDetailsModule { }
