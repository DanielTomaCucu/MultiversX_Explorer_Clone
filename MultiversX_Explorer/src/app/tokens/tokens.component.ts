import { Component } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
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
  constructor(private tokensService: TokensService) {
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
