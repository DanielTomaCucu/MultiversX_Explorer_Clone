import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  value: any;
  constructor(private accountsService: AccountsService) {
    this.subscriptions = new Subscription();
  }

  displayedColumns = ['address', 'balance'];

  ngOnInit() {
    this.subscriptions.add(
      this.accountsService
        .getTotalAccounts()
        .subscribe((data) => (this.accountsCount = data))
    );
    this.subscriptions.add(
      this.accountsService.getTotalStake().subscribe((data: any) => {
        this.totalStakeCount = data.totalStaked;
        this.activeValidators = data.activeValidators;
      })
    );
    this.subscriptions.add(
      this.accountsService.getAccountsList().subscribe((data) => {
        this.accountsList = data;
        this.dataSource = this.accountsList;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
