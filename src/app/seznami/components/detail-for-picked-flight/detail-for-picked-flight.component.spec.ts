import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailForPickedFlightComponent } from './detail-for-picked-flight.component';

describe('DetailForPickedFlightComponent', () => {
  let component: DetailForPickedFlightComponent;
  let fixture: ComponentFixture<DetailForPickedFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailForPickedFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailForPickedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
