import { Component } from '@angular/core';
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
  constructor(private dasboardService: DashboardService) {}

  ngOnInit() {
    this.dasboardService.getAccountsCounts().subscribe((data) => {
      this.accountsCount = data;
    });
    this.dasboardService.getBlocksCount().subscribe((data) => {
      this.blocksCount = data;
    });
    this.dasboardService.getTransactionsCount().subscribe((data) => {
      this.transactionsCount = data;
    });
    this.dasboardService.getValidatorsCount().subscribe((data) => {
      this.validatorsCount = data;
    });
  }
}
