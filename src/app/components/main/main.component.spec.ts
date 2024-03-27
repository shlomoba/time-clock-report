import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { TimecardService } from '../../services/timecard.service';
import { TimecardServiceStub } from '../../services/timecard.service.mock';
import { components } from '../../components/components';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent, ...components],
      imports: [NzDropDownModule],
      providers: [{ provide: TimecardService, useClass: TimecardServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
