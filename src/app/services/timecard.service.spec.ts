import { HttpClient } from '@angular/common/http';
import { TimecardService } from './timecard.service';
import { of } from 'rxjs';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let timecardService: TimecardService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  timecardService = new TimecardService(httpClientSpy);
});

it('should return expected time card (HttpClient called once)', (done: DoneFn) => {
  const expectedTimecard = {
    data: [
      {
        date: '1',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '2',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '3',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '4',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '5',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '6',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '7',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '8',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '9',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '10',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '11',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '12',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '13',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '14',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '15',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '16',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '17',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '18',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '19',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '20',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '21',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '22',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '23',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '24',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '25',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '26',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '27',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '28',
        start: null,
        end: null,
        count: 0,
      },
      {
        date: '29',
        start: null,
        end: null,
        count: 0,
      },
    ],
    total: 0,
  };

  httpClientSpy.get.and.returnValue(of(expectedTimecard));

  timecardService.getTimecard({ month: 2, year: 2024 }).subscribe({
    next: (timecard) => {
      expect(timecard)
        .withContext('expected timecard')
        .toEqual(expectedTimecard);
      done();
    },
    error: done.fail,
  });
  expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
});
