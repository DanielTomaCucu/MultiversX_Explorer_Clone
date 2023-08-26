import { Component } from '@angular/core';
import { filter, map } from 'rxjs';
import { TokensService } from './tokens.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent {
  marketCap: any = 0;
  totalTokens: number = 0;
  transactions: number = 0;
  constructor(private tokensService: TokensService) {}
  ngOnInit() {
    this.tokensService
      .getMarketcap()
      .subscribe((market) => (this.marketCap = market));
    this.tokensService
      .getTotalTokens()
      .subscribe((data) => (this.totalTokens = data));
    this.tokensService
      .getTransactions()
      .subscribe((data) => (this.transactions = data));
  }
}
