import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AccountsDetailsService } from '../accounts/accounts-details/accounts-details.service';
import { LoadingSpinnerService } from '../shared/loading-spinner.service';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  dataSource!: MatTableDataSource<any>;
  currentFrom: number = 0;
  itemsSize: number = 25;
  subscription: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private transactionsService: TransactionsService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService,
    private accountDetailsService:AccountsDetailsService
  ) {
    this.subscription = new Subscription();
  }
  displayedColumns: string[] = [
    'txn_hash',
    'age',
    'shard',
    'from',
    'to',
    'method',
  ];

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.getTransactions();
      })
    );
  }

  getTransactions() {
    this.subscription.add(
      this.transactionsService
        .getTransactions(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
        })
    );
  }
  containsManyQs(address: string): boolean {
    const pattern = /q{10,}/;
    return pattern.test(address);
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
  getAddress(address: any): Observable<any> {
    this.router.navigate(['/accounts', address]);
    return this.accountDetailsService.getAccountDetails(address);
  }
  updatePage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
