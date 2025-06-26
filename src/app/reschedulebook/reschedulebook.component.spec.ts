import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulebookComponent } from './reschedulebook.component';

describe('ReschedulebookComponent', () => {
  let component: ReschedulebookComponent;
  let fixture: ComponentFixture<ReschedulebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReschedulebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReschedulebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
