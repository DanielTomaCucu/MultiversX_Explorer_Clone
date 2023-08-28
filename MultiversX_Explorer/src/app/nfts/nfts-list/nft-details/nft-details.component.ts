import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { NftDetailsService } from './nft-details.service';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.scss'],
})
export class NftDetailsComponent {
  subscription: Subscription;
  nftDetal: any;
  constructor(
    private nftsDetailsService: NftDetailsService,
    private route: ActivatedRoute
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const collection: any = this.route.snapshot.paramMap.get('collection');
    this.subscription = this.nftsDetailsService
      .getCollectionDetails(collection)
      .subscribe((data) => {
        this.processData(data);
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
