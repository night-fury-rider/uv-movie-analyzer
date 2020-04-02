import { Component, OnInit } from '@angular/core';
import searchboxData from './uv-searchbox.component.json';

@Component({
  selector: 'app-uv-searchbox',
  templateUrl: './uv-searchbox.component.html',
  styleUrls: ['./uv-searchbox.component.scss']
})
export class UvSearchboxComponent implements OnInit {

  searchbox;

  constructor() {
    this.searchbox = searchboxData;
  }

  searchItems(): any {
    alert(2);
    console.log(333);
  }

  ngOnInit(): void {
  }

}
