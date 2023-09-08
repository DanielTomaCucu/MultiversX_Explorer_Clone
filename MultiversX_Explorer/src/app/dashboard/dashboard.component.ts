import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoadingSpinnerService } from '../shared/loading-spinner.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  accountsCount: any;
  blocksCount: any;
  transactionsCount: any;
  validatorsCount: any;
  subsciptions: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  latestBloks: any;
  constructor(
    private dasboardService: DashboardService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subsciptions = new Subscription();
  }

  ngOnInit() {
    this.subsciptions.add(
      this.dasboardService.getAccountsCounts().subscribe((data) => {
        this.accountsCount = data;
      })
    );
    this.subsciptions.add(
      this.dasboardService.getBlocksCount().subscribe((data) => {
        this.blocksCount = data;
      })
    );
    this.subsciptions.add(
      this.dasboardService.getTransactionsCount().subscribe((data) => {
        this.transactionsCount = data;
      })
    );
    this.subsciptions.add(
      this.dasboardService.getValidatorsCount().subscribe((data) => {
        this.validatorsCount = data;
      })
    );
    this.dasboardService.getBlocks().subscribe((data) => {
      console.log(data);
      this.latestBloks = data;
    });
  }

  ngOnDestroy() {
    this.subsciptions.unsubscribe();
  }
}
