import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { AccountsDetailsService } from './accounts-details.service';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.scss'],
})
export class AccountsDetailsComponent {
  address: any;
  accountDetails: any;
  accountTokensCount: number = 0;
  stakeAmount: any;
  nftAmount: number = 0;
  subscription: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private accountDetailsService: AccountsDetailsService,
    private route: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.address = this.route.snapshot.paramMap.get('address');
    this.subscription.add(
      this.accountDetailsService
        .getAccountDetails(this.address)
        .subscribe((data) => (this.accountDetails = data))
    );
    this.subscription.add(
      this.accountDetailsService
        .getTokensCount(this.address)
        .subscribe((data) => (this.accountTokensCount = data))
    );

    this.subscription.add(
      this.accountDetailsService
        .getStakeAmount(this.address)
        .subscribe((data) => (this.stakeAmount = data.totalStaked))
    );
    this.subscription.add(
      this.accountDetailsService
        .getNftCount(this.address)
        .subscribe((data) => (this.nftAmount = data))
    );
  }

  copyToClipboard() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.address;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
