import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NftsService } from './nfts.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss'],
})
export class NftsComponent {
  subscription: Subscription;
  nftsCount: number = 0;
  collectionsCount: number = 0;
  resultsCount: number = 0;
  economics: number = 0;
  constructor(private ntfsService: NftsService) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(
      this.ntfsService
        .getNftsCount()
        .subscribe((data) => (this.nftsCount = data))
    );
    this.subscription.add(
      this.ntfsService
        .getCollectionsCount()
        .subscribe((data) => (this.collectionsCount = data))
    );
    this.subscription.add(
      this.ntfsService
        .getResultsCount()
        .subscribe((data) => (this.resultsCount = data))
    );
    this.subscription.add(
      this.ntfsService.getMCap().subscribe((data) => (this.economics = data))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
