import { Component, OnInit } from '@angular/core';
import { ImageDetailsService } from 'src/app/shared/services/image-details.service';
import { ApiCallService } from 'src/app/shared/services/api-call.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-image-details-main',
  templateUrl: './image-details-main.component.html',
  styleUrls: ['./image-details-main.component.css']
})
export class ImageDetailsMainComponent implements OnInit {

  public selectedImageObj: any = {};
  public webImageUrl: any;
  callFrom = 'imageDetailsMain';
  constructor(
    private imageDetailsService: ImageDetailsService,
    private apiCallService: ApiCallService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.loadSelectedImageDetails();
  }

  loadSelectedImageDetails() {
    const objectNumber = this.imageDetailsService.getObjNumber();
    if(objectNumber !== '') {
      this.spinner.show();
      this.apiCallService.getMoreDetails(objectNumber).subscribe((response) => {
        this.selectedImageObj = response;
        this.webImageUrl = response.artObject.webImage.url;
        this.spinner.hide();
      });
    }
  }
}
