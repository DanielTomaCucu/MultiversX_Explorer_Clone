import { Component, ViewChild } from '@angular/core';
import { TokensListService } from './tokens-list.service';
import { TokensService } from '../tokens.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokensListComponent {
  dataSource: any;
  tokens: number = 0;
  ecoMCap: any = 0;
  constructor(
    private tokensListService: TokensListService,
    private tokensService: TokensService
  ) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.tokensListService.getTokensList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
    this.tokensService
      .getTotalTokens()
      .subscribe((data) => (this.tokens = data));
    this.tokensService
      .getMarketcap()
      .subscribe((data) => (this.ecoMCap = data));
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
}
