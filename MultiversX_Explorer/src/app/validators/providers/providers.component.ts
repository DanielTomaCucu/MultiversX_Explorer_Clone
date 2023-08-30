import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { ProvidersDetailsService } from './providers-details/providers-details.service';
import { ProvidersService } from './providers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
})
export class ProvidersComponent {
  providersList: any;
  subscription: Subscription;
  dataSource!: MatTableDataSource<any>;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private providersService: ProvidersService,
    private router: Router,
    private providersDetailsService: ProvidersDetailsService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(
      this.providersService.getProviders().subscribe((data) => {
        this.providersList = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      })
    );
  }

  displayedColumns: string[] = [
    'name',
    'stake',
    'nodes',
    'computedApr',
    'serviceFee',
    'delegationCap',
    'filled',
  ];
  toPercentage(value: number): string {
    let percentageValue = (value * 100).toFixed(2);
    if (percentageValue.endsWith('.00')) {
      percentageValue = percentageValue.substring(
        0,
        percentageValue.length - 3
      );
    }
    return `${percentageValue}%`;
  }

  getUsagePercentage(used: number, total: number): string {
    if (total === 0) return '0%';
    const percentage = (used / total) * 100;
    return `${percentage.toFixed(1)}%`;
  }
  redirectToProvider(address: string) {
    this.router.navigate(['/providers', address]);
    this.providersDetailsService.getProvidersDetails(address);
  }
  ngOnDelete() {
    this.subscription.unsubscribe();
  }
}
