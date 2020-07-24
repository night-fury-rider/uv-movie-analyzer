import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as globalmocks from '../globalmocks';

import { UvFilterComponent } from './uv-filter.component';
import { HomeService } from '../home/home.service';
import { UvUtilService } from '../uv-util/uv-util.service';

describe('UvFilterComponent', () => {
  let component: UvFilterComponent;
  let fixture: ComponentFixture<UvFilterComponent>;
  const areArraysEqual = globalmocks.UvUtilService.areArraysEqual();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvFilterComponent ],
      providers: [
        {
          provide: HomeService,
          useValue: globalmocks.HomeService
        },
        {
          provide: UvUtilService,
          useValue: globalmocks.UvUtilService
        },
        {
          provide: NgbModal,
          useValue: globalmocks.NgbModal
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvFilterComponent);
    component = fixture.componentInstance;
    component.uvFilters = globalmocks.appData.filters;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('changeActiveFilter should change Active Filter', () => {
    const activeFilter = globalmocks.appData.filters[0];
    component.changeActiveFilter(activeFilter);
    expect(component.activeFilter).toEqual(activeFilter);
  });

  it('applyFilters should apply Filters', () => {
    component.applyFilters();
    expect(globalmocks.UvUtilService.areArraysEqual).toHaveBeenCalled();
    expect(globalmocks.HomeService.filterCards).not.toHaveBeenCalled();

    globalmocks.UvUtilService.areArraysEqual.and.callFake(() => {
      return false;
    });
    component.applyFilters();
    expect(globalmocks.UvUtilService.areArraysEqual).toHaveBeenCalled();
    expect(globalmocks.HomeService.filterCards).toHaveBeenCalled();
  });

  it('openFilters should open Filters', () => {
    const tmpFilter = {};
    component.openFilters(tmpFilter);
    expect(globalmocks.NgbModal.open).toHaveBeenCalled();
  });

  afterAll(() => {
    globalmocks.UvUtilService.areArraysEqual.and.callFake(() => {
      return areArraysEqual;
    });
  });
});
