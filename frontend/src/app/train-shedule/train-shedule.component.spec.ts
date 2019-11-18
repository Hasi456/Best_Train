import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSheduleComponent } from './train-shedule.component';

describe('TrainSheduleComponent', () => {
  let component: TrainSheduleComponent;
  let fixture: ComponentFixture<TrainSheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainSheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
