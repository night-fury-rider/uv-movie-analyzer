import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HomeService } from './../home/home.service';
import { UvUtilService } from './../uv-util/uv-util.service';

@Component({
  selector: 'app-uv-filter',
  templateUrl: './uv-filter.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./uv-filter.component.scss']
})
export class UvFilterComponent implements OnInit {

  @Input() uvFilters: any;

  UV_FILTERS: any;

  activeFilter;

  closeResult: string;

  constructor(private modalService: NgbModal, private homeService: HomeService, 
              private utilService: UvUtilService) { }

  ngOnInit(): void {
    this.activeFilter = this.uvFilters[0];
    this.UV_FILTERS = JSON.parse(JSON.stringify(this.uvFilters));
  }  

  changeFilter(filter) {
    this.activeFilter = filter;
  }

  applyFilters() {
    if(!this.utilService.areArraysEqual(this.UV_FILTERS, this.uvFilters)) {
      this.homeService.filterCards(this.uvFilters);
    }
  };

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
