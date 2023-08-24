import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  accountsCount: string = '';
  totalStakeCount: any = '';
  activeValidators: string = '';
  constructor(private accountsService: AccountsService) {}
  ngOnInit() {
    this.accountsService
      .getTotalAccounts()
      .subscribe((data) => (this.accountsCount = data));
    this.accountsService.getTotalStake().subscribe((data: any) => {
      this.totalStakeCount = data.totalStaked;
      this.activeValidators = data.activeValidators;
    });
  }
}
