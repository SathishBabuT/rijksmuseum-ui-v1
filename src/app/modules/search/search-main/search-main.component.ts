import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.css']
})
export class SearchMainComponent implements OnInit {

  callFrom = 'searchMain';
  searchKey: any;
  @ViewChild('searchView') searchView:any;
  constructor() { }

  ngOnInit(): void {
  }

  searchOnKeyword(searchKey:any) {
    this.searchView.searchObjects(searchKey);
  }

}
