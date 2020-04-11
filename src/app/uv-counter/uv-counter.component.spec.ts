import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvCounterComponent } from './uv-counter.component';

describe('UvCounterComponent', () => {
  let component: UvCounterComponent;
  let fixture: ComponentFixture<UvCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
