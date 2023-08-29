import { Component } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { LoadingSpinnerService } from '../shared/loading-spinner.service';
import { TokensService } from './tokens.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent {
  subscriptions: Subscription;
  marketCap: any = 0;
  totalTokens: number = 0;
  transactions: number = 0;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private tokensService: TokensService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscriptions = new Subscription();
  }
  ngOnInit() {
    this.subscriptions.add(
      this.tokensService
        .getMarketcap()
        .subscribe((market) => (this.marketCap = market))
    );
    this.subscriptions.add(
      this.tokensService
        .getTotalTokens()
        .subscribe((data) => (this.totalTokens = data))
    );
    this.subscriptions.add(
      this.tokensService
        .getTransactions()
        .subscribe((data) => (this.transactions = data))
    );
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
