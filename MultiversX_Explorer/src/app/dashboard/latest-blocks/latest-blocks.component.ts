import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { interval, Subject, Subscription, switchMap, takeUntil, timer } from 'rxjs';
import { LatestBlocksService } from './latest-blocks.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-blocks',
  templateUrl: './latest-blocks.component.html',
  styleUrls: ['./latest-blocks.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateX(0%)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
    ]),
  ],
})
export class LatestBlocksComponent {
  latestBloks: any;
  subscription: Subscription;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private latestBlocksService: LatestBlocksService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const stopAfterOneMinute$ = timer(60000);
    this.subscription = interval(3000)
      .pipe(
        takeUntil(stopAfterOneMinute$),
        switchMap(() => this.latestBlocksService.getBlocks())
      )
      .subscribe((data) => {
        this.latestBloks = [...data];
        this.cd.markForCheck();
      });
  }

  redirectToBlocks() {
    this.router.navigate(['blocks']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
       this.destroy$.next();
       this.destroy$.complete();
  }
}
