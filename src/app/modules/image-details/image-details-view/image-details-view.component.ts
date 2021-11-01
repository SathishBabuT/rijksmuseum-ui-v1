import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-details-view',
  templateUrl: './image-details-view.component.html',
  styleUrls: ['./image-details-view.component.css']
})
export class ImageDetailsViewComponent implements OnInit {

  @Input() selectedImageObj: any;
  constructor() { }

  ngOnInit(): void {
  }

}
