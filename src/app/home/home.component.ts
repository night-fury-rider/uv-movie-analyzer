import { Component, OnInit } from '@angular/core';
import uvData from './../../data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  uvCards = [];
  constructor() {
    this.uvCards = uvData.cards;
  }

  ngOnInit(): void {
  }

}
