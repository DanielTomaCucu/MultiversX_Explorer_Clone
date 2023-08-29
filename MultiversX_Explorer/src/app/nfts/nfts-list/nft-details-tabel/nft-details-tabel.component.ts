import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { NftInfoService } from '../nft-info/nft-info.service';
import { NftDetailsTableService } from './nft-details-table.service';

@Component({
  selector: 'app-nft-details-tabel',
  templateUrl: './nft-details-tabel.component.html',
  styleUrls: ['./nft-details-tabel.component.scss'],
})
export class NftDetailsTabelComponent {
  currentFrom: number = 0;
  itemsSize: number = 25;
  nfts: string[] = [];
  dataSource!: MatTableDataSource<any>;
  subscriptions: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private nftDetailsTableService: NftDetailsTableService,
    private nftInfoService: NftInfoService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.loadNfts();
      })
    );
  }

  loadNfts() {
    const collection: any = this.route.snapshot.paramMap.get('collection');
    this.subscriptions.add(
      this.nftDetailsTableService
        .getNftList(collection, this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.nfts = data;
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

  redirectToNft(identifier: any) {
    this.nftInfoService.getNftInfo(identifier);
    this.router.navigate(['/nfts', identifier]);
  }

  displayedColumns: string[] = ['identifier', 'name', 'creator'];

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
