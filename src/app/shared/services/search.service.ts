import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public dataBackup: any = {};
  constructor() { }

  setDataBackup(collectionData: any) {
    this.dataBackup = collectionData;
  }

  getDataBackup() {
    return this.dataBackup;
  }
}
