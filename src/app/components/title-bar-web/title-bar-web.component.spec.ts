import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarWebComponent } from './title-bar-web.component';

describe('TitleBarWebComponent', () => {
  let component: TitleBarWebComponent;
  let fixture: ComponentFixture<TitleBarWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBarWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleBarWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
