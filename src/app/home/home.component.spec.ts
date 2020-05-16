import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { UvUtilService } from '../uv-util/uv-util.service';

import * as globalmocks from '../globalmocks';

const resetToGlobalMocks = () => {
  globalmocks.HomeService.searchSubscriber$ = {
    subscribe: (callback) => {
      callback('Predator');
    }
  };
  globalmocks.HomeService.filterSubscriber$.subscribe = (callback) => {
    callback('');
  };
};

const resetToInitialMocks = () => {
  globalmocks.HomeService.filterSubscriber$.subscribe = (callback) => {
    callback(null);
  };
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        globalmocks.UvCardStubComponent
      ],
      providers: [
        {
          provide: HomeService,
          useValue: globalmocks.HomeService
        },
        {
          provide: UvUtilService,
          useValue: globalmocks.UvUtilService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.appData = globalmocks.appData;
    component.uvCards = globalmocks.cardData;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    beforeEach( async () => {
      resetToInitialMocks();
      fixture.detectChanges();
      component.ngOnInit();
    });

    it('should init search Box Subscription', () => {
      expect(globalmocks.HomeService.updateCounter).toHaveBeenCalled();
      expect(component.uvActiveCards.length).toEqual(5);

      globalmocks.HomeService.searchSubscriber$ = {
        subscribe: (callback) => {
          callback('Predator');
        }
      };
      component.ngOnInit();
      expect(component.uvActiveCards.length).toEqual(2);
    });

    it('should init filter Subscription', () => {

      globalmocks.UvUtilService.applyCheckboxFilter.calls.reset();
      globalmocks.UvUtilService.applyRangeFilter.calls.reset();
      expect(globalmocks.UvUtilService.applyCheckboxFilter).not.toHaveBeenCalled();
      expect(globalmocks.UvUtilService.applyRangeFilter).not.toHaveBeenCalled();

      // Test checkbox filter
      globalmocks.UvUtilService.applyCheckboxFilter.calls.reset();
      globalmocks.UvUtilService.applyRangeFilter.calls.reset();
      let activeFilters = globalmocks.getClonedObj(globalmocks.appData.filters);
      activeFilters[0].subFilters[1].isActive = true;
      globalmocks.HomeService.filterSubscriber$.subscribe = (callback) => {
        callback(activeFilters);
      };
      component.ngOnInit();
      expect(globalmocks.UvUtilService.applyCheckboxFilter).toHaveBeenCalled();
      expect(globalmocks.UvUtilService.applyRangeFilter).not.toHaveBeenCalled();

      // Test range filter
      globalmocks.UvUtilService.applyCheckboxFilter.calls.reset();
      globalmocks.UvUtilService.applyRangeFilter.calls.reset();
      activeFilters[0].subFilters[1].isActive = false;
      activeFilters[1].subFilters[1].isActive = true;
      globalmocks.HomeService.filterSubscriber$.subscribe = (callback) => {
        callback(activeFilters);
      };
      component.ngOnInit();
      expect(globalmocks.UvUtilService.applyCheckboxFilter).not.toHaveBeenCalled();
      expect(globalmocks.UvUtilService.applyRangeFilter).toHaveBeenCalled();

      // Test checkbox and range filters simultaneously
      globalmocks.UvUtilService.applyCheckboxFilter.calls.reset();
      globalmocks.UvUtilService.applyRangeFilter.calls.reset();
      activeFilters = globalmocks.getClonedObj(globalmocks.appData.filters);
      activeFilters[0].subFilters[1].isActive = true;
      activeFilters[1].subFilters[1].isActive = true;
      globalmocks.HomeService.filterSubscriber$.subscribe = (callback) => {
        callback(activeFilters);
      };
      component.ngOnInit();
      expect(globalmocks.UvUtilService.applyCheckboxFilter).toHaveBeenCalled();
      expect(globalmocks.UvUtilService.applyRangeFilter).toHaveBeenCalled();
    });
  });

/*
  TODO: This test case needs to be fixed.
  it('ngOnDestroy should unsubscribe all subscriptions', () => {
    spyOn(component.searchBoxSubscription, 'unsubscribe');
    spyOn(component.filterSubscription, 'unsubscribe');
    spyOn(component.sortSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.searchBoxSubscription.unsubscribe).toHaveBeenCalled();
    expect(component.filterSubscription.unsubscribe).toHaveBeenCalled();
    expect(component.sortSubscription.unsubscribe).toHaveBeenCalled();
  }); */

  afterAll( () => {
    resetToGlobalMocks();
  });
});
