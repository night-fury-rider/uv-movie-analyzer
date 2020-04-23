import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvFilterComponent } from './uv-filter.component';

describe('UvFilterComponent', () => {
  let component: UvFilterComponent;
  let fixture: ComponentFixture<UvFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
