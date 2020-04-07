import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import uvData from './../data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = uvData.app.title;
  icon: SafeResourceUrl;
  appData = uvData.app;
  constructor(private sanitizer: DomSanitizer) {
    this.icon = this.sanitizer.bypassSecurityTrustResourceUrl(uvData.app.icon);
  }
}
