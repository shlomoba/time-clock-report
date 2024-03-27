import { Component, Input, Output, EventEmitter } from '@angular/core';
import { get } from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  months = {
    0: { id: 0, text: 'January' },
    1: { id: 1, text: 'February' },
    2: { id: 2, text: 'March' },
    3: { id: 3, text: 'April' },
    4: { id: 4, text: 'May' },
    5: { id: 5, text: 'June' },
    6: { id: 6, text: 'July' },
    7: { id: 7, text: 'August' },
    8: { id: 8, text: 'September' },
    9: { id: 9, text: 'October' },
    10: { id: 10, text: 'November' },
    11: { id: 11, text: 'December' },
  };

  years = [2022, 2023, 2024];

  @Input() selectedMonthId: number;
  @Input() selectedYearId: number;
  @Output() monthChanged = new EventEmitter();
  @Output() yearChanged = new EventEmitter();

  getMonthArray() {
    return Object.values(this.months);
  }

  getSelectedMonth() {
    const found = get(this.months, this.selectedMonthId, this.months[0]);
    return found.text;
  }

  onSelectMonth(id: number) {
    const found = get(this.months, id, this.months[0]);
    this.selectedMonthId = found.id;
    this.monthChanged.emit(this.selectedMonthId);
  }

  onSelectYear(year: number) {
    this.selectedYearId = year;
    this.yearChanged.emit(this.selectedYearId);
  }
}
