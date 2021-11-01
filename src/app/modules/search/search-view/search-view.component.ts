import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/shared/services/api-call.service';
import { ImageDetailsService } from 'src/app/shared/services/image-details.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  collectionData: any;
  constructor(private apiCallService: ApiCallService,
    private imageDetailsService: ImageDetailsService,
    private router: Router,
    private searchService: SearchService,
    private cd:ChangeDetectorRef,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadCollectionData();
  }

  loadCollectionData() {
    this.spinner.show();
    this.apiCallService.getImageCollections().subscribe((response)=> {
      this.collectionData = response.artObjects;
      //this.setFilterData();
      this.spinner.hide();
    })
  }

  retrieveImgData(data: any) {
    this.imageDetailsService.setObjNumber(data.objectNumber);
    this.router.navigateByUrl('/collections/details');
  }

  searchObjects(searchKey: any) {
    const artObjects = this.searchService.getDataBackup();
    const result = artObjects.find((data:any) => {
      return data.title === searchKey;
    });
    if(searchKey && searchKey !== '' && result) {
      this.collectionData = [result];
    } else if(searchKey && searchKey !== '' && !result) {
      this.collectionData = [];
    } else {
      this.collectionData = artObjects;
    }
    this.cd.detectChanges();
  }

  ngOnDestroy() {

  }
}
