import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAndDelayComponent } from './weather-and-delay.component';

describe('WeatherAndDelayComponent', () => {
  let component: WeatherAndDelayComponent;
  let fixture: ComponentFixture<WeatherAndDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAndDelayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherAndDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
