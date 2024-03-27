import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [NzTimePickerModule, NzDropDownModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit month changed on dropdown changed', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    // spy on event emitter
    const component = fixture.componentInstance;
    spyOn(component.monthChanged, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const link = nativeElement.querySelector('a');
    link.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    //???
    const li = fixture.debugElement.nativeElement.querySelector(
      '.ant-dropdown-menu-item'
    );
    li.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.monthChanged.emit).toHaveBeenCalled();
  });
});
