import { TestBed } from '@angular/core/testing';
import * as globalmocks from '../globalmocks';

import { SvgCheckboxService } from '../../lib/svg-checkbox/svg-checkbox.service';

import { UvUiComponentService } from './uv-ui-component.service';

describe('UvUiComponentService', () => {
  let service: UvUiComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SvgCheckboxService,
          useValue: globalmocks.SvgCheckboxService
        }
      ]
    });
    service = TestBed.inject(UvUiComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('drawCheckbox should draw Checkbox', () => {
    service.drawCheckbox();
    expect(globalmocks.SvgCheckboxService.drawSVGCheckbox).toHaveBeenCalled();
  });
});
