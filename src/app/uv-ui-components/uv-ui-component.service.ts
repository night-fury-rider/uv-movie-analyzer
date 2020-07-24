import { Injectable } from '@angular/core';

import { SvgCheckboxService } from '../../lib/svg-checkbox/svg-checkbox.service';

@Injectable({
  providedIn: 'root'
})
export class UvUiComponentService {

  constructor(private svgCheckboxService: SvgCheckboxService) { }

  drawCheckbox() {
    this.svgCheckboxService.drawSVGCheckbox();
  }
}
