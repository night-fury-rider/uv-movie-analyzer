import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { HomeService } from './../home/home.service';

@Component({
  selector: 'app-uv-counter',
  templateUrl: './uv-counter.component.html',
  styleUrls: ['./uv-counter.component.scss']
})
export class UvCounterComponent implements OnInit {

  counterSubscription: Subscription;
  counter: number;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.counterSubscription = this.homeService.cardCounter$.subscribe(counter => this.counter = counter);
  }

}
