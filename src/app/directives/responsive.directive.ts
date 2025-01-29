import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsive]',
})
export class ResponsiveDirective {
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletLandscape, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          const breakpoints = result.breakpoints;

          if (breakpoints[Breakpoints.HandsetPortrait]) {
            console.log('screens matches HandsetPortrait');
            this.element.nativeElement.classList.add('mobile');
            this.element.nativeElement.classList.remove('tablet');
          }
          if (breakpoints[Breakpoints.TabletLandscape]) {
            console.log('screens matches TabletLandscape');
            this.element.nativeElement.classList.remove('mobile');
            this.element.nativeElement.classList.add('tablet');
          } else if (breakpoints[Breakpoints.WebLandscape]) {
            console.log('screens matches WebLandscape');
            this.element.nativeElement.classList.remove('tablet');
          }
        },
      });
  }
}
