import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { NftDetailsTableService } from '../nft-details-tabel/nft-details-table.service';
import { NftDetailsService } from './nft-details.service';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss'],
})
export class NftDetailsComponent {
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  subscription: Subscription;
  nftDetal: any;
  constructor(
    private nftsDetailsService: NftDetailsService,
    private route: ActivatedRoute,
    private nffDetailsTableService: NftDetailsTableService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const collection: any = this.route.snapshot.paramMap.get('collection');
    this.subscription = this.nftsDetailsService
      .getCollectionDetails(collection)
      .subscribe((data) => {
        this.nftDetal = data;
        this.processData(data);
        this.nffDetailsTableService.getNftList(data.collection);
      });
  }

  objectKeys = Object.keys;
  displayedProperties: { label: string; value: any }[] = [];
  processData(nftDetal: any) {
    const propertiesToDisplay = [
      { key: 'canUpgrade', label: 'Can Upgrade' },
      { key: 'canMint', label: 'Can Mint' },
      { key: 'canBurn', label: 'Can Burn' },
      { key: 'canChangeOwner', label: 'Can Change Owner' },
      { key: 'canPause', label: 'Can Pause' },
      { key: 'canWipe', label: 'Can Wipe' },
      { key: 'canFreeze', label: 'Can Freeze' },
      { key: 'isPaused', label: 'Not Paused' },
    ];

    this.displayedProperties = propertiesToDisplay.map((prop) => {
      return {
        label: prop.label,
        value: nftDetal[prop.key] ? 'Yes' : 'No',
      };
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
