import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NftDetailsService } from './nft-details/nft-details.service';
import { NftsListService } from './nfts-list.service';

@Component({
  selector: 'app-nfts-list',
  templateUrl: './nfts-list.component.html',
  styleUrls: ['./nfts-list.component.scss'],
})
export class NftsListComponent {
  subscription: Subscription;
  nfts: any;
  dataSource!: MatTableDataSource<any>;
  currentFrom: number = 0;
  itemsSize: number = 25;
  constructor(
    private nftsListService: NftsListService,
    private router: Router,
    private nftDetailsService: NftDetailsService
  ) {
    this.subscription = new Subscription();
  }

  displayedColumns: string[] = [
    'collection',
    'name',
    'age',
    'items',
    'holders',
    'owner',
  ];
  ngOnInit() {
    this.loadTokens();
  }
  loadTokens() {
    this.subscription.add(
      this.nftsListService
        .getListOfNfts(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          console.log(data), (this.nfts = data);
          this.dataSource = new MatTableDataSource(data);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  redirectToCollection(collection: string) {
    this.nftDetailsService.getCollectionDetails(collection);
    this.router.navigate(['/nfts', collection]);
  }

  redirectToUserAccount(account: number) {
    this.router.navigate(['/accounts', account]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
