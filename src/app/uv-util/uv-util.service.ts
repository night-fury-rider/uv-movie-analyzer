import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UvUtilService {

  constructor() { }

  /**
   * @description Function to apply range filters
   * @param sourceArray - Array of objects on which range filters to be applied.
   * @param rangeFilters - Object with different range filters.
   * @returns Filtered array of objects.
   */
  applyRangeFilter(sourceArray: any, rangeFilters: any) {
    let filteredArray = [];
    for (const filterName of Object.keys(rangeFilters)) {
      for (const rangeFilter of rangeFilters[filterName]) {
        filteredArray = filteredArray.concat(sourceArray.filter(obj => {
          return obj[filterName] >= rangeFilter.range[0] && obj[filterName] < rangeFilter.range[1];
        }));
      }
    }
    return filteredArray;
  }

  /**
   * @description Function to apply checkbox filters
   * @param sourceArray - Array of objects on which checkbox filters to be applied.
   * @param rangeFilters - Object with different checkbox filters.
   * @returns Filtered array of objects.
   */
  applyCheckboxFilter(sourceArray: any, checkboxFilters: any) {
    let filteredArray = [];
    for (const filterName of Object.keys(checkboxFilters)) {
      for (const filter of checkboxFilters[filterName]) {
        filteredArray = filteredArray.concat(sourceArray.filter(obj => {
          return filter.id === obj[filterName];
        }));
      }
    }
    return filteredArray;
  }

  /**
   * @description Function to know passed array are equal or not
   * @param arr1 - Array 1
   * @param arr2 - Array 2
   * @returns true if arrays are equal otherwise return false.
   * Note: This method is not recommended if array is large
   */
  areArraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
}
