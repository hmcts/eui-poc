import { TestBed } from '@angular/core/testing';

import { AppointmentCalendarPageService } from './appointment-calendar-page.service';

describe('AppointmentCalendarPageService', () => {
  let service: AppointmentCalendarPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentCalendarPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
