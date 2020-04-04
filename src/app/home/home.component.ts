import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import uvData from './../../data/data.json';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  searchBoxSubscription: Subscription;
  uvCards = [];
  uvActiveCards = [];
  appData = {};
  constructor(private homeService: HomeService) {
    this.uvCards = uvData.cards;
    this.uvActiveCards = JSON.parse(JSON.stringify(uvData.cards));
    this.appData = uvData.app;
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
