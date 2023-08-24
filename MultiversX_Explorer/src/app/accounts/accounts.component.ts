import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
  accountsList!: Observable<any>;
  dataSource :any;
  constructor(private accountsService: AccountsService) {

  }

  displayedColumns = ['address', 'balance'];

  ngOnInit() {
    this.accountsService
      .getTotalAccounts()
      .subscribe((data) => (this.accountsCount = data));
    this.accountsService.getTotalStake().subscribe((data: any) => {
      this.totalStakeCount = data.totalStaked;
      this.activeValidators = data.activeValidators;
    });
    this.accountsService.getAccountsList().subscribe((data) => {
      this.accountsList = data;
      this.dataSource = this.accountsList; // <-- Set the dataSource here
    });

  }
}
