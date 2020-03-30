import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvCardComponent } from './uv-card.component';

describe('UvCardComponent', () => {
  let component: UvCardComponent;
  let fixture: ComponentFixture<UvCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
