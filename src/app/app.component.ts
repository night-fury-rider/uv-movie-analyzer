import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import { HomeService } from './home/home.service';
import uvData from './../data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = uvData.app.title;
  icon: SafeResourceUrl;
  appData = uvData.app;
  sortOrders = uvData.app.sortOrders;
  selectedSortOrder = this.sortOrders[this.appData.defaultOrderIndex];
  uvFilters = this.appData.filters;
  constructor(private sanitizer: DomSanitizer, private homeService: HomeService) {
    this.icon = this.sanitizer.bypassSecurityTrustResourceUrl(uvData.app.icon);
  }
  changeSortOrder(sortOrderIndex: number) {
    this.selectedSortOrder = this.sortOrders[sortOrderIndex];
    this.homeService.sortCards(this.sortOrders[sortOrderIndex]);
  }
}
