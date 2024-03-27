import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { components } from './components/components';
import { TimecardService } from './services/timecard.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreNgZorroAntdModule } from './ng-zorro-antd.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, CoreNgZorroAntdModule],
      declarations: [AppComponent, ...components],
      providers: [TimecardService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
