import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NftDetailsService } from 'src/app/nfts/nfts-list/nft-details/nft-details.service';
import { NftInfoService } from 'src/app/nfts/nfts-list/nft-info/nft-info.service';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { AccountNftsService } from './account-nfts.service';

@Component({
  selector: 'app-account-nfts',
  templateUrl: './account-nfts.component.html',
  styleUrls: ['./account-nfts.component.scss'],
})
export class AccountNftsComponent {
  accountNfts: any;
  subscription: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private route: ActivatedRoute,
    private accountNftsService: AccountNftsService,
    private router: Router,
    private nftDetailsService: NftDetailsService,
    private nftInfoService: NftInfoService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const address: any = this.route.parent?.snapshot.paramMap.get('address');
    this.subscription.add(
      this.accountNftsService.getNfts(address).subscribe((data) => {
        this.accountNfts = data;
      })
    );
  }
  redirectToCollection(collection: string) {
    this.nftDetailsService.getCollectionDetails(collection);
    this.router.navigate(['/collections', collection]);
  }
  redirectToNft(identifier: any) {
    this.nftInfoService.getNftInfo(identifier);
    this.router.navigate(['/nfts', identifier]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
