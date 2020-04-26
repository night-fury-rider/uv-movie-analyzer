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

  previousFilters: any;

  activeFilter;

  closeResult: string;

  constructor(private modalService: NgbModal, private homeService: HomeService,
              private utilService: UvUtilService) { }

  ngOnInit(): void {
    this.activeFilter = this.uvFilters[0];
    this.previousFilters = JSON.parse(JSON.stringify(this.uvFilters));
  }

  /**
   * @description Function to set active filter.
   * @param filter - Filter which has to be set as active.
   */
  changeActiveFilter(filter) {
    this.activeFilter = filter;
  }

  applyFilters() {
    const appliedFilters = JSON.parse(JSON.stringify(this.uvFilters));
    if (!this.utilService.areArraysEqual(this.previousFilters, appliedFilters)) {
      this.homeService.filterCards(appliedFilters);
      this.previousFilters = appliedFilters;
    }
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
