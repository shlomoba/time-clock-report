import { Component, Input, SimpleChanges } from '@angular/core';
import { TimecardService } from '../../services/timecard.service';
import { isNull } from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  data: any;
  total: number;
  @Input() month: number;
  @Input() year: number;

  constructor(private TimecardService: TimecardService) {}

  onChanged() {
    this.getTimecard();
  }

  getTimecard() {
    const { month, year } = this;
    this.TimecardService.getTimecard({ month, year }).subscribe((res) => {
      const { data, total } = <any>res;
      this.data = data;
      this.total = total;
    });
  }

  convertTime(time: string) {
    if (isNull(time) === true) {
      return null;
    }

    var d = new Date(time);
    return moment.default(d).format('HH:mm:ss');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getTimecard();
  }
}
