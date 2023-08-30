import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProvidersDetailsService } from './providers-details.service';

@Component({
  selector: 'app-providers-details',
  templateUrl: './providers-details.component.html',
  styleUrls: ['./providers-details.component.scss'],
})
export class ProvidersDetailsComponent {
  providerDetails: any;
  subscription: Subscription;
  constructor(
    private providerDetailsService: ProvidersDetailsService,
    private route: ActivatedRoute
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    const addr: any = this.route.snapshot.paramMap.get('address');
    this.subscription.add(
      this.providerDetailsService
        .getProvidersDetails(addr)
        .subscribe((data) => {
          console.log(data);
        })
    );
  }

  ngOnDelete() {
    this.subscription.unsubscribe();
  }
}
