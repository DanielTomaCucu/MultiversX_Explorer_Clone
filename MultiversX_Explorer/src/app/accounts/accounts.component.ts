import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AccountsDetailsService } from './accounts-details/accounts-details.service';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  private subscriptions: Subscription;
  accountsCount: string = '';
  totalStakeCount: any = '';
  activeValidators: string = '';
  accountsList!: Observable<any>;
  dataSource: any;
  currentFrom: number = 0;
  itemsSize: number = 25;
  constructor(
    private accountsService: AccountsService,
    private accountDetailsService: AccountsDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscriptions = new Subscription();
  }

  displayedColumns = ['address', 'balance'];

  ngOnInit() {
    this.subscriptions.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.getAccounts();
      })
    );

    this.subscriptions.add(
      this.accountsService.getTotalStake().subscribe((data: any) => {
        this.totalStakeCount = data.totalStaked;
        this.activeValidators = data.activeValidators;
      })
    );

    this.subscriptions.add(
      this.accountsService
        .getTotalAccounts()
        .subscribe((data) => (this.accountsCount = data))
    );
  }
  nextPage() {
    const nextPage = this.currentFrom / this.itemsSize + 2;
    this.updateRoute(nextPage);
  }

  prevPage() {
    const prevPage = this.currentFrom / this.itemsSize;
    if (this.currentFrom > 0) {
      this.updateRoute(prevPage);
    }
  }
  updateRoute(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }

  getAccounts() {
    this.subscriptions.add(
      this.accountsService
        .getAccountsList(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.accountsList = data;
          this.dataSource = this.accountsList;
          console.log(data);
        })
    );
  }
  getAddress(address: any): Observable<any> {
    this.router.navigate(['/accounts', address]);
    return this.accountDetailsService.getAccountDetails(address);
  }
  containsManyQs(address: string): boolean {
    const pattern = /q{10,}/; 
    return pattern.test(address);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
