import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimecardService {
  endpoint = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getTimecard(data: { month: number; year: number }): Observable<object> {
    const { month, year } = data;
    const url = `${this.endpoint}/timecard?month=${month}&year=${year}`;
    return this.http.get(url, this.httpOptions);
  }

  updateTimeCard(data: {
    month: number;
    year: number;
    date: number;
    start: string | undefined;
    end: string | undefined;
  }): Observable<object> {
    const url = `${this.endpoint}/timecard`;
    let options = {
      headers: new HttpHeaders()
        .set('Accept', 'application/json, text/plain, */*')
        .set('Content-Type', 'application/json;charset=UTF-8'),
    };
    return this.http.patch(url, JSON.stringify(data), options);
  }
}
