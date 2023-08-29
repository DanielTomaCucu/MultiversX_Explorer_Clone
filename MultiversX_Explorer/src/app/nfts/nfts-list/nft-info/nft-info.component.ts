import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { identity, Subscription } from 'rxjs';
import { NftInfoService } from './nft-info.service';

@Component({
  selector: 'app-nft-info',
  templateUrl: './nft-info.component.html',
  styleUrls: ['./nft-info.component.scss'],
})
export class NftInfoComponent {
  infoNft: any;
  nftTransactions: any;
  dataSource!: MatTableDataSource<any>;
  currentFrom: number = 0;
  itemsSize: number = 25;
  transactionsList: any;
  subscriptions: Subscription;
  constructor(
    private nftInfoService: NftInfoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscriptions = new Subscription();
  }

  displayedColumns: string[] = [
    'txHash',
    'timestamp',
    'senderShard',
    'sender',
    'receiver',
    'method',
    'value',
  ];

  ngOnInit() {
    this.subscriptions.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.loadNftTransactions();
      })
    );
    this.loadNft();
  }
  loadNft() {
    const nft: any = this.route.snapshot.paramMap.get('nft');
    this.subscriptions.add(
      this.nftInfoService.getNftInfo(nft).subscribe((data) => {
        this.infoNft = data;
      })
    );
  }
  loadNftTransactions() {
    const identifier: any = this.route.snapshot.paramMap.get('nft');
    this.subscriptions.add(
      this.nftInfoService
        .getNftTransactions(identifier, this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          console.log(data), (this.transactionsList = data);
          this.dataSource = new MatTableDataSource(data);
        })
    );
  }
  showImage: boolean = false;
  imageUrl: string = '';

  showImagePreview(url: string) {
    this.imageUrl = url;
    this.showImage = true;
  }

  hideImagePreview() {
    this.showImage = false;
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
  ngOnDistroy() {
    this.subscriptions.unsubscribe();
  }
}