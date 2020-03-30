import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uv-card',
  templateUrl: './uv-card.component.html',
  styleUrls: ['./uv-card.component.scss']
})
export class UvCardComponent implements OnInit {

  @Input () cardData: any;

  constructor() {}

  ngOnInit(): void {
  }

}
