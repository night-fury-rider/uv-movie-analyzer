import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import uvData from './../../data/data.json';
import { HomeService } from './home.service';
import { UvUtilService } from './../uv-util/uv-util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() appData: any;

  searchBoxSubscription: Subscription;
  filterSubscription: Subscription;
  sortSubscription: Subscription;

  uvCards = [];
  uvActiveCards = [];

  constructor(private homeService: HomeService, private uvUtilService: UvUtilService) {
    let rawCardsData = [];
    let categoryData;
    for (const categoryName of uvData.app.categories) {
      categoryData = require('./../../data/categories/' + categoryName + '.json');
      // Add category in card data. It would be used for filtering based on category.
      for (const myCard of categoryData.cards) {
        myCard.category = categoryName;
      }
      rawCardsData = rawCardsData.concat(categoryData.cards);
    }

    this.uvCards = rawCardsData;
    this.uvActiveCards = JSON.parse(JSON.stringify(this.uvCards));
    this.homeService.updateCounter(this.uvActiveCards.length);
  }

  ngOnInit(): void {
    /**
     * @description Function to subscribe to searchbox.
     */
    this.searchBoxSubscription = this.homeService.searchSubscriber$.subscribe(searchString => {
      searchString = searchString.toLowerCase();
      this.uvActiveCards = this.uvCards.filter(uvCard => {
        return (uvCard.title.toLowerCase().indexOf(searchString) > -1);
      });
      this.homeService.updateCounter(this.uvActiveCards.length);
    });

    /**
     * @description Function to subscribe to filters.
     */
    this.filterSubscription = this.homeService.filterSubscriber$.subscribe(activeFilters => {

      if (activeFilters === null) {
        return;
      }
      const tmpCards = JSON.parse(JSON.stringify(this.uvCards));
      const rangeFilters = {};
      const checkboxFilters = {};
      let isRangeFilterApplied = false;
      let isCheckboxFilterApplied = false;
      for (const activeFilter of activeFilters) {
        if (activeFilter && activeFilter.type === 'range') {
          rangeFilters[activeFilter.filterAttribute] = [];
          for (const subFilter of activeFilter.subFilters) {
            if (subFilter.isActive) {
              rangeFilters[activeFilter.filterAttribute].push(subFilter);
              isRangeFilterApplied = true;
            }
          }
        }
        if (activeFilter && activeFilter.type === 'checkbox') {
          checkboxFilters[activeFilter.filterAttribute] = [];
          for (const subFilter of activeFilter.subFilters) {
            if (subFilter.isActive) {
              checkboxFilters[activeFilter.filterAttribute].push(subFilter);
              isCheckboxFilterApplied = true;
            }
          }
        }
      }

      if (isCheckboxFilterApplied) {
        this.uvActiveCards = this.uvUtilService.applyCheckboxFilter(this.uvCards, checkboxFilters);
      }
      if (isRangeFilterApplied) {
        const rangeSourceCards = (isCheckboxFilterApplied) ? this.uvActiveCards : this.uvCards;
        this.uvActiveCards = this.uvUtilService.applyRangeFilter(rangeSourceCards, rangeFilters);
      }

      this.homeService.sortCards(this.appData.sortOrders[this.appData.defaultOrderIndex]);
      this.homeService.updateCounter(this.uvActiveCards.length);
    });

    this.sortSubscription = this.homeService.cardSortOrderSubscriber$.subscribe(sortOrder => {
      let cardAValue;
      let cardBValue;
      if (sortOrder === null || typeof sortOrder === 'undefined') {
        sortOrder = this.appData.sortOrders[this.appData.defaultOrderIndex];
      }
      this.uvActiveCards = this.uvActiveCards.sort((uvCardA, uvCardB) => {
        if (sortOrder.type === 'number') {
          return uvCardB[sortOrder.sortAttribute] - uvCardA[sortOrder.sortAttribute];
        } else if (sortOrder.type === 'string') {
          cardAValue = uvCardA[sortOrder.sortAttribute].toLowerCase();
          cardBValue = uvCardB[sortOrder.sortAttribute].toLowerCase();
          if (cardAValue > cardBValue) {
            return 1;
          } else if (cardAValue < cardBValue) {
            return -1;
          } else {
            return 0;
          }
        } else {
          return uvCardB[sortOrder.sortAttribute] - uvCardA[sortOrder.sortAttribute];
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.searchBoxSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
    this.sortSubscription.unsubscribe();
  }
}
