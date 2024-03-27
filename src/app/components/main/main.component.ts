import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass',
})
export class MainComponent {
  selectedMonthId: number;
  selectedYearId: number;

  ngOnInit(): void {
    const date = new Date();
    this.selectedMonthId = date.getMonth();
    this.selectedYearId = date.getFullYear();
  }

  onMonthChanged(newMonth: number): void {
    this.selectedMonthId = newMonth;
  }

  onYearChanged(newYear: number): void {
    this.selectedYearId = newYear;
  }
}
