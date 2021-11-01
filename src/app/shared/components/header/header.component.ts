import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() imgSource: any = '../../../../assets/rijksmuseum.jpg';
  @Input() callFrom: any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  ngOnChanges() {

  }

  showLanguage() {
    console.log('show languages');
  }

  invokeLogin() {
    console.log('invoke login');
  }

  invokeGiftShop() {
    console.log('');
  }

  bookTickets() {
    console.log('');
  }

  redirectToSearchPage() {
    this.router.navigateByUrl('/collections');
  }

}
