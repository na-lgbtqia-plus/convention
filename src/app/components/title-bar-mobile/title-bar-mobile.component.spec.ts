import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarMobileComponent } from './title-bar-mobile.component';

describe('TitleBarMobileComponent', () => {
  let component: TitleBarMobileComponent;
  let fixture: ComponentFixture<TitleBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBarMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
