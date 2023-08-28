import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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
    private nftDetailsService: NftDetailsService,
    private route: ActivatedRoute
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
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.loadTokens();
      })
    );
  }
  loadTokens() {
    this.subscription.add(
      this.nftsListService
        .getListOfNfts(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
        })
    );
  }
  nextPage() {
    const nextPage = this.currentFrom / this.itemsSize + 2;
    this.updatePage(nextPage);
  }

  prevPage() {
    const prevPage = this.currentFrom / this.itemsSize;
    if (prevPage > 0) {
      this.updatePage(prevPage);
    }
  }
  updatePage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  redirectToCollection(collection: string) {
    this.nftDetailsService.getCollectionDetails(collection);
    this.router.navigate(['/collections', collection]);
  }

  redirectToUserAccount(account: number) {
    this.router.navigate(['/accounts', account]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
