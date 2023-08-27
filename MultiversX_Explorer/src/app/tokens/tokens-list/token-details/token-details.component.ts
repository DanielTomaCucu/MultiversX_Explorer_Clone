import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenDetailsService } from './token-details.service';

@Component({
  selector: 'app-token-details',
  templateUrl: './token-details.component.html',
  styleUrls: ['./token-details.component.scss'],
})
export class TokenDetailsComponent {
  tokenDetails: any;
  subscription: Subscription;
  constructor(
    private tokenDetailsService: TokenDetailsService,
    private route: ActivatedRoute
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const identifier = this.route.snapshot.paramMap.get('identifier');
    this.subscription = this.tokenDetailsService
      .getTokensDetails(identifier)
      .subscribe((data) => {
        this.tokenDetails = data;
        this.processData(this.tokenDetails);
      });
  }
  objectKeys = Object.keys;
  displayedProperties: { label: string; value: any }[] = [];

  processData(tokenDetails: any) {
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
        value: tokenDetails[prop.key] ? 'Yes' : 'No',
      };
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
