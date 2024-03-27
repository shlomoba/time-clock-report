import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimecardService } from '../../services/timecard.service';
import { isNull } from 'lodash';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss',
})
export class EditButtonComponent {
  @Input() date: any;
  @Input() month: number;
  @Input() year: number;
  @Input() start: string;
  @Input() end: string;
  startTime: Date | null = null;
  endTime: Date | null = null;
  @Output() changed = new EventEmitter();
  isVisible = false;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

  constructor(private TimecardService: TimecardService) {}

  ngOnInit(): void {
    this.startTime = isNull(this.start) ? null : new Date(this.start);
    this.endTime = isNull(this.end) ? null : new Date(this.end);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    const { month, year, date, startTime, endTime } = this;
    const start = startTime?.toISOString();
    const end = endTime?.toISOString();
    this.TimecardService.updateTimeCard({
      month,
      year,
      date,
      start,
      end,
    }).subscribe((data) => {
      this.changed.emit();
      this.isVisible = false;
    });
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  updateTimecard() {}
}
