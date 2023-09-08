import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
  interval,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';

import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LastTransactionsService } from './last-transactions.service';
@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: '{{ enterTransform }}' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateX(0%) translateY(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%) translateY(0%)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 0, transform: '{{ leaveTransform }}' })
        ),
      ]),
    ]),
  ],
})
export class LastTransactionsComponent {
  public isSmallScreen: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 550;
  }
  latestTransactions: any;
  subscription: Subscription;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private lastTransactions: LastTransactionsService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.onResize(null);
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const stopAfterOneMinute$ = timer(60000);
    this.subscription = interval(3000)
      .pipe(
        takeUntil(stopAfterOneMinute$),
        switchMap(() => this.lastTransactions.getTransactions())
      )

      .subscribe((data) => {
        this.latestTransactions = [...data];
        this.cd.markForCheck();
      });
  }

  redirectToBlocks() {
    this.router.navigate(['blocks']);
  }
  containsManyQs(address: string): boolean {
    const pattern = /q{10,}/;
    return pattern.test(address);
  }
  removeElrond(value: string): string {
    return value.replace('.elrond', '');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
