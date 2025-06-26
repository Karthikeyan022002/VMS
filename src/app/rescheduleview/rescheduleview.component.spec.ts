import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleviewComponent } from './rescheduleview.component';

describe('RescheduleviewComponent', () => {
  let component: RescheduleviewComponent;
  let fixture: ComponentFixture<RescheduleviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescheduleviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
