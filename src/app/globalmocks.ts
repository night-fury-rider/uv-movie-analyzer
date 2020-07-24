export const appData = {
  defaultOrderIndex: 0,
  sortOrders: [{
    type: 'string',
    name: 'Title',
    sortAttribute: 'title'
  }],
  filters: [
    {
      id: 'category',
      title: 'Category',
      type: 'checkbox',
      filterAttribute: 'category',
      subFilters: [
        {
          id: 'animation',
          title: 'Animation',
          isActive: false
        },
        {
          id: 'alien',
          title: 'Alien',
          isActive: false
        },
        {
          id: 'dummy',
          title: 'Dummy',
          isActive: false
        }
      ]
    },
    {
      id: 'year',
      title: 'Year',
      type: 'range',
      filterAttribute: 'year',
      subFilters: [
        {
          id: '2000z',
          title: '2000 - 2009',
          range: [2000, 2009],
          isActive: false
        },
        {
          id: '2010z',
          title: '2010 - 2019',
          range: [2010, 2019],
          isActive: false
        }
      ]
    }
  ],
  icon: './assets/icons/logo.svg',
  cardPath: './../../assets/cards/',
  categories: ['action', 'alien', 'adventure']
};

export const cardData = [
  {
    category: 'alien',
    title: 'Predator',
    year: 1987,
    img: 'predator-1987.jpg',
    url: '',
    stars: [],
    quality: '720p',
    isHindi: true
  },
  {
    category: 'alien',
    title: 'Alien Vs Predator',
    year: 2004,
    img: 'alien-vs-predator-2004.jpg',
    url: '',
    stars: [],
    quality: '720p',
    isHindi: true
  },
  {
    category: 'alien',
    title: 'Enders Game',
    year: 2013,
    img: 'enders-game-2013.jpg',
    url: '',
    stars: [],
    quality: '720p',
    isHindi: false
  },
  {
    category: 'animation',
    title: 'Frozen',
    year: 2013,
    img: 'frozen-2013.jpg',
    url: '',
    stars: [],
    quality: '720p',
    isHindi: true
  },
  {
    category: 'sci-fi',
    title: 'Upside Down',
    year: 2012,
    img: 'upside-down-2012.jpg',
    url: '',
    stars: [],
    quality: '720p',
    isHindi: false
  }
];

export const getClonedObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

import { Component, Input } from '@angular/core';

@Component({selector: 'app-home', template: ''})
export class HomeStubComponent{ @Input() appData; }

@Component({selector: 'app-uv-filter', template: ''})
export class UvFilterStubComponent{ @Input() uvFilters; }

@Component({selector: 'app-uv-searchbox', template: ''})
export class UvSearchboxStubComponent{}

@Component({selector: 'app-uv-counter', template: ''})
export class UvCounterStubComponent{}

@Component({selector: 'app-uv-card', template: ''})
export class UvCardStubComponent{
  @Input() appData;
  @Input() cardData;
}

export const SvgCheckboxService = jasmine.createSpyObj('SvgCheckboxService', ['drawSVGCheckbox']);

const emptySubscribeObj = {
  subscribe: (callback) => {
    callback('Alien');
  }
};

export const HomeService = jasmine.createSpyObj('HomeService', ['updateCards', 'updateCounter',
    'sortCards', 'filterCards', 'searchSubscriber$', 'filterSubscriber$', 'cardCounterSubscriber$',
    'cardSortOrderSubscriber$']);

HomeService.searchSubscriber$ = {
  subscribe: (callback) => {
    callback('');
  }
};

const activeFilters = getClonedObj(appData.filters);
activeFilters[0].subFilters[1].isActive = true;
activeFilters[1].subFilters[1].isActive = true;
HomeService.filterSubscriber$ = {
  subscribe: (callback) => {
    callback(activeFilters);
  }
};
HomeService.cardCounterSubscriber$ = emptySubscribeObj;
HomeService.cardSortOrderSubscriber$ = emptySubscribeObj;

export const UvUtilService = jasmine.createSpyObj('UvUtilService', ['applyRangeFilter',
    'applyCheckboxFilter', 'areArraysEqual']);

UvUtilService.areArraysEqual.and.callFake(() => {
  return true;
});
UvUtilService.applyRangeFilter.and.callFake(() => {
  return [];
});
UvUtilService.applyCheckboxFilter.and.callFake(() => {
  return [];
});

export const NgbModal = jasmine.createSpyObj('NgbModal', ['open']);
