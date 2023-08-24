import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translate3d(0, 0, 0)' })),
      state('out', style({ transform: 'translate3d(100%, 0, 0)' })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  isHandset$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe('(max-width: 1150px)')
      .pipe(map((result) => result.matches));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.drawer && this.drawer.opened) {
        this.drawer.close();
      }
    });
  }
}
