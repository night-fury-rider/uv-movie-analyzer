import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import uvData from './../../data/data.json';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() appData: any;

  searchBoxSubscription: Subscription;
  uvCards = [];
  uvActiveCards = [];
  constructor(private homeService: HomeService) {

    let rawCardsData = [];
    let categoryData;
    for (const categoryName of uvData.app.categories) {
      categoryData = require('./../../data/categories/' + categoryName + '.json');
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
    this.searchBoxSubscription = this.homeService.cards$.subscribe(searchString => {
      searchString = searchString.toLowerCase();
      this.uvActiveCards = this.uvCards.filter(uvCard => {
        return (uvCard.title.toLowerCase().indexOf(searchString) > -1);
      });
      this.homeService.updateCounter(this.uvActiveCards.length);
    });
  }

  ngOnDestroy(): void {
    this.searchBoxSubscription.unsubscribe();
  }
}
