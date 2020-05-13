import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

import * as globalmocks from '../globalmocks';

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
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.appData = globalmocks.appData;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should init search Box Subscription', () => {
      expect(globalmocks.HomeService.updateCounter).toHaveBeenCalled();
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
});
