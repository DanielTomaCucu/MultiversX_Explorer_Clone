import { Component } from '@angular/core';
import { last, Subscription } from 'rxjs';
import { NetworkInfoService } from './network-info.service';

@Component({
  selector: 'app-network-info',
  templateUrl: './network-info.component.html',
  styleUrls: ['./network-info.component.scss'],
})
export class NetworkInfoComponent {
  private subsciptions: Subscription;
  value: any;
  epoch: any = '';
  price: number = 0;
  tokensCount: number = 0;
  constructor(private networkInfo: NetworkInfoService) {
    this.subsciptions = new Subscription();
  }

  ngOnInit() {
    this.subsciptions.add(
      this.networkInfo.getRounds().subscribe((data) => (this.epoch = data))
    );
    this.subsciptions.add(
      this.networkInfo.getPrice().subscribe((data) => (this.price = data))
    );
    this.subsciptions.add(
      this.networkInfo
        .getTokensCount()
        .subscribe((data) => (this.tokensCount = data))
    );
  }
  ngOnDestroy() {
    this.subsciptions.unsubscribe();
  }
}
