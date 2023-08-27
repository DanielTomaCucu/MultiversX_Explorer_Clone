import { Component, ViewChild } from '@angular/core';
import { TokensListService } from './tokens-list.service';
import { TokensService } from '../tokens.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TokenDetailsService } from './token-details/token-details.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokensListComponent {
  subscriptions: Subscription;
  dataSource: any;
  tokens: number = 0;
  ecoMCap: any = 0;
  constructor(
    private tokensListService: TokensListService,
    private tokensService: TokensService,
    private router: Router,
    private tokenDetailsService: TokenDetailsService
  ) {
    this.subscriptions = new Subscription();
  }
  @ViewChild(MatSort) sort!: MatSort;
  currentFrom: number = 0;
  itemsSize: number = 25;

  ngOnInit() {
    this.loadTokens();
    this.subscriptions.add(
      this.tokensService
        .getTotalTokens()
        .subscribe((data) => (this.tokens = data))
    );
    this.subscriptions.add(
      this.tokensService
        .getMarketcap()
        .subscribe((data) => (this.ecoMCap = data))
    );
  }

  loadTokens() {
    this.subscriptions.add(
      this.tokensListService
        .getTokensList(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        })
    );
  }

  nextPage() {
    this.currentFrom += this.itemsSize;
    this.loadTokens();
  }

  prevPage() {
    if (this.currentFrom > 0) {
      this.currentFrom -= this.itemsSize;
      this.loadTokens();
    }
  }
  displayedColumns: string[] = [
    'ticker',
    'name',
    'price',
    'circulatingSupply',
    'marketCap',
    'holders',
    'transactions',
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  redirectToToken(identifier: string) {
    console.log(identifier);
    this.router.navigate(['/tokens', identifier]);
    this.tokenDetailsService.getTokensDetails(identifier);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
