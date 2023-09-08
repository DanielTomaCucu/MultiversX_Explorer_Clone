import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { TokenDetailsService } from 'src/app/tokens/tokens-list/token-details/token-details.service';
import { EsdtTokensService } from './esdt-tokens.service';

@Component({
  selector: 'app-esdt-tokens',
  templateUrl: './esdt-tokens.component.html',
  styleUrls: ['./esdt-tokens.component.scss'],
})
export class EsdtTokensComponent {
  tokens: any;
  address: any;
  subscribe: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private estdTokensService: EsdtTokensService,
    private route: ActivatedRoute,
    private tokenDetailsService: TokenDetailsService,
    private router: Router,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscribe = new Subscription();
  }
  ngOnInit() {
    this.subscribe.add(
      this.route?.parent?.paramMap.subscribe((params) => {
        this.address = params.get('address');
      })
    );

    this.subscribe.add(
      this.estdTokensService.getTokens(this.address).subscribe((data) => {
      
        this.tokens = data;
      })
    );
  }
  redirectToToken(identifier: string) {
    this.router.navigate(['/tokens', identifier]);
    this.tokenDetailsService.getTokensDetails(identifier);
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
