import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchMainComponent } from './search-main/search-main.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchViewComponent } from './search-view/search-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchMainComponent,
    SearchViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
