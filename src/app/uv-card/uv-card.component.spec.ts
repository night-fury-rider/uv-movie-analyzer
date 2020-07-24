import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as globalmocks from '../globalmocks';

import { UvCardComponent } from './uv-card.component';
import { HomeComponent } from '../home/home.component';

describe('UvCardComponent', () => {
  let component: UvCardComponent;
  let fixture: ComponentFixture<UvCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvCardComponent, HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvCardComponent);
    component = fixture.componentInstance;
    component.appData = globalmocks.appData;
    component.cardData = globalmocks.cardData;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
