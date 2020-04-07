import { Component, OnInit } from '@angular/core';

import searchboxData from './uv-searchbox.component.json';
import { HomeService } from './../home/home.service';

@Component({
  selector: 'app-uv-searchbox',
  templateUrl: './uv-searchbox.component.html',
  styleUrls: ['./uv-searchbox.component.scss']
})
export class UvSearchboxComponent implements OnInit {

  searchbox;
  searchText;

  constructor(private homeService: HomeService) {
    this.searchbox = searchboxData;
  }

  searchItems(): any {
    this.homeService.updateCards(this.searchText);
  }

  ngOnInit(): void {
  }

}
