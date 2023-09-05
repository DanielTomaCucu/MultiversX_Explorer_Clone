import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { ProvidersDetailsService } from './providers-details.service';

@Component({
  selector: 'app-providers-details',
  templateUrl: './providers-details.component.html',
  styleUrls: ['./providers-details.component.scss'],
})
export class ProvidersDetailsComponent {
  providerDetails: any;
  providerDetailsSummar: any;
  providerNodes: any;
  subscription: Subscription;
  isFeatured = localStorage.getItem('featured');
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  dataSource!: MatTableDataSource<any>;
  currentFrom: number = 0;
  itemsSize: number = 25;
  owner!: string;
  constructor(
    private providerDetailsService: ProvidersDetailsService,
    private route: ActivatedRoute,
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
  @ViewChild(MatSort) sort!: MatSort;
  async ngOnInit() {
    const addr: any = this.route.snapshot.paramMap.get('address');
    await this.providerDetailsService
      .getProvidersDetails(addr)
      .pipe(
        tap((data) => {
          this.providerDetails = data;
          this.owner = data.owner;
        })
      )
      .toPromise();
    await this.loadProviderSmallData();
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.loadNodes();
      })
    );
  }
  loadNodes() {
    const addr: any = this.route.snapshot.paramMap.get('address');
    this.subscription.add(
      this.providerDetailsService
        .getProvidersNodes(addr, this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          console.log(data);
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        })
    );
  }
  async loadProviderSmallData() {
    this.providerDetailsService
      .getProviderSmallInfo(this.owner)
      .subscribe((data) => {
        this.providerDetailsSummar = data[0];
      });
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

  redirectToNode(bls: string) {
    this.router.navigate(['/nodes', bls]);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
