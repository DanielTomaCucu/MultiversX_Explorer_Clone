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
        console.log(data), (this.nftDetal = data);
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
