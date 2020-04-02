import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvSearchboxComponent } from './uv-searchbox.component';

describe('UvSearchboxComponent', () => {
  let component: UvSearchboxComponent;
  let fixture: ComponentFixture<UvSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
