import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDetailsService {

  public objectNumber: string = '';
  constructor() { }

  setObjNumber(objNumber: string) {
    this.objectNumber = objNumber;
  }

  getObjNumber() {
    return this.objectNumber;
  }

}
