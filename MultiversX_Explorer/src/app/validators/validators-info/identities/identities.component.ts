import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { IdentitiesService } from './identities.service';

@Component({
  selector: 'app-identities',
  templateUrl: './identities.component.html',
  styleUrls: ['./identities.component.scss'],
})
export class IdentitiesComponent {
  dataSourceDelegation!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  identifierDetails: any;
  distribution?: { [key: string]: string };
  provider: any = localStorage.getItem('provider');
  currentFrom: number = 0;
  itemsSize: number = 25;
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private identitiesService: IdentitiesService,
    private loadingSpinnerService: LoadingSpinnerService,
    private router: Router
  ) {
    this.subscription = new Subscription();
  }
  displayedColumns: string[] = [
    'public_key',
    'name',
    'shard',
    'version',
    'ignored_signatures',
    'status',
    'rating',
    'nonce',
  ];
  displayedDelegted: string[] = [
    'address',
    'stake',
    'nodes',
    'computed_apr',
    'service_fee',
    'delegation_cap',
    'filled',
  ];

  ngOnInit() {
    const identifier: any = this.route.snapshot.paramMap.get('name');
    this.subscription.add(
      this.identitiesService.getIdentity(identifier).subscribe((data) => {
        this.distribution = data?.distribution;
        this.identifierDetails = data;
      })
    );
    this.subscription.add(
      this.identitiesService
        .getProviderDetails(this.provider)
        .subscribe((data) => {
          this.dataSourceDelegation = new MatTableDataSource([data]);
        })
    );

    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.getNodes();
      })
    );
  }

  getNodes() {
    this.subscription.add(
      this.identitiesService
        .getNodes(this.provider, this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        })
    );
  }
  nextPage() {
    const nextPage = this.currentFrom / this.itemsSize + 2;
    this.updatePage(nextPage);
  }

  prevPage() {
    const prevPage = this.currentFrom / this.itemsSize;
    if (prevPage > 0) {
      this.updatePage(prevPage);
    }
  }
  updatePage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
  getUsagePercentage(used: number, total: number): string {
    if (total === 0) return '0%';
    const percentage = (used / total) * 100;
    return `${percentage.toFixed(1)}%`;
  }

  toPercentage(value: any): string {
    let percentageValue = (value * 100).toFixed(2);
    if (percentageValue.endsWith('.00')) {
      percentageValue = percentageValue.substring(
        0,
        percentageValue.length - 3
      );
    }
    return `${percentageValue}%`;
  }
  redirectToProvider(providerAddr: string) {
    this.router.navigate(['/providers', providerAddr]);
  }
  redirectToNode(bls:string) {
  this.router.navigate(['/nodes', bls]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
