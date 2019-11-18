import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainSheduleComponent } from './add-train-shedule.component';

describe('AddTrainSheduleComponent', () => {
  let component: AddTrainSheduleComponent;
  let fixture: ComponentFixture<AddTrainSheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainSheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
