import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainSheduleComponent } from './update-train-shedule.component';

describe('UpdateTrainSheduleComponent', () => {
  let component: UpdateTrainSheduleComponent;
  let fixture: ComponentFixture<UpdateTrainSheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrainSheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
