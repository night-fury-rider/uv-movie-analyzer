import { Component, OnInit } from '@angular/core';
import uvData from './../../data/data.json';

@Component({
  selector: 'app-uv-counter',
  templateUrl: './uv-counter.component.html',
  styleUrls: ['./uv-counter.component.scss']
})
export class UvCounterComponent implements OnInit {

  uvCards = uvData.cards;
  constructor() { }

  ngOnInit(): void {
  }

}