import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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
  constructor(private dasboardService: DashboardService) {
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
  }

  ngOnDestroy() {
    this.subsciptions.unsubscribe();
  }
}
