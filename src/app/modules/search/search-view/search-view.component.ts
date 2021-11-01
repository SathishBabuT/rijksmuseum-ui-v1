import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/shared/services/api-call.service';
import { ImageDetailsService } from 'src/app/shared/services/image-details.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  collectionData: any;
  dropdownList: any = [];
  selectedMakers: any = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(private apiCallService: ApiCallService,
    private imageDetailsService: ImageDetailsService,
    private router: Router,
    private searchService: SearchService,
    private cd:ChangeDetectorRef,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedMakers = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.loadCollectionData();
  }

  loadCollectionData() {
    this.spinner.show();
    this.apiCallService.getImageCollections().subscribe((response)=> {
      this.collectionData = response.artObjects;
      this.searchService.setDataBackup(this.collectionData);
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

  onMakerSelect(event: any) {

  }

  onSelectAll(event: any) {

  }

  ngOnDestroy() {

  }
}
