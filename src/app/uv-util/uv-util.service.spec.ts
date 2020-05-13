import { TestBed } from '@angular/core/testing';
import * as globalmocks from '../globalmocks';

import { UvUtilService } from './uv-util.service';

describe('UvUtilService', () => {
  let service: UvUtilService;
  let rangeFilter;
  let checkboxFilter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvUtilService);
    checkboxFilter = JSON.parse(JSON.stringify(globalmocks.appData.filters[0]));
    rangeFilter = JSON.parse(JSON.stringify(globalmocks.appData.filters[1]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('applyRangeFilter should apply Range Filter', () => {
    const tmpFilters = {
      [rangeFilter.filterAttribute]: []
    };
    tmpFilters[rangeFilter.filterAttribute].push(rangeFilter.subFilters[0]);
    expect(service.applyRangeFilter(globalmocks.cardData, tmpFilters).length).toEqual(1);

    tmpFilters[rangeFilter.filterAttribute] = [];
    tmpFilters[rangeFilter.filterAttribute].push(rangeFilter.subFilters[1]);
    expect(service.applyRangeFilter(globalmocks.cardData, tmpFilters).length).toEqual(3);

    tmpFilters[rangeFilter.filterAttribute] = [];
    expect(service.applyRangeFilter(globalmocks.cardData, tmpFilters).length).toEqual(0);
  });

  it('applyCheckboxFilter should apply Checkbox Filter', () => {
    const tmpFilters = {
      [checkboxFilter.filterAttribute]: []
    };
    tmpFilters[checkboxFilter.filterAttribute].push(checkboxFilter.subFilters[0]);
    expect(service.applyCheckboxFilter(globalmocks.cardData, tmpFilters).length).toEqual(1);

    tmpFilters[checkboxFilter.filterAttribute] = [];
    tmpFilters[checkboxFilter.filterAttribute].push(checkboxFilter.subFilters[1]);
    expect(service.applyCheckboxFilter(globalmocks.cardData, tmpFilters).length).toEqual(2);

    tmpFilters[checkboxFilter.filterAttribute] = [];
    tmpFilters[checkboxFilter.filterAttribute].push(checkboxFilter.subFilters[2]);
    expect(service.applyCheckboxFilter(globalmocks.cardData, tmpFilters).length).toEqual(0);
  });

  it('areArraysEqual should check Arrays are Equal or not', () => {
    let arr1: any;
    let arr2: any;

    arr1 = ['Yuvraj'];
    arr2 = ['Jon'];
    expect(service.areArraysEqual(arr1, arr2)).toBeFalsy();

    arr1 = ['Yuvraj'];
    arr2 = ['Yuvraj'];
    expect(service.areArraysEqual(arr1, arr2)).toBeTruthy();

    arr1 = [{
      name: 'Yuvraj'
    }];
    arr2 = [{
      name: 'Jon'
    }];
    expect(service.areArraysEqual(arr1, arr2)).toBeFalsy();

    arr1 = [{
      name: 'Jon'
    }];
    arr2 = [{
      name: 'Jon'
    }];
    expect(service.areArraysEqual(arr1, arr2)).toBeTruthy();
  });
});
