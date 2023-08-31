import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { ProvidersDetailsService } from './providers-details.service';

@Component({
  selector: 'app-providers-details',
  templateUrl: './providers-details.component.html',
  styleUrls: ['./providers-details.component.scss'],
})
export class ProvidersDetailsComponent {
  providerDetails: any;
  providerDetailsSummar: any;
  subscription: Subscription;
  isFeatured = localStorage.getItem('featured');
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  constructor(
    private providerDetailsService: ProvidersDetailsService,
    private route: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const addr: any = this.route.snapshot.paramMap.get('address');
    this.subscription.add(
      this.providerDetailsService
        .getProvidersDetails(addr)
        .subscribe((data) => {
          this.providerDetails = data;
        })
    );
    const storedDetails = localStorage.getItem('providerDetails');
    if (storedDetails) {
      this.providerDetailsSummar = JSON.parse(storedDetails);
    }
  }

  ngOnDelete() {
    this.subscription.unsubscribe();
  }
}
