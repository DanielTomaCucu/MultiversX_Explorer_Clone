import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { ProvidersDetailsService } from '../../providers/providers-details/providers-details.service';
import { NodesInfoService } from './nodes-info.service';

@Component({
  selector: 'app-nodes-info',
  templateUrl: './nodes-info.component.html',
  styleUrls: ['./nodes-info.component.scss'],
})
export class NodesInfoComponent {
  nodeInfo: any;
  bls: any = this.route.snapshot.paramMap.get('bls');
  subscription: Subscription;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  providerDetailsSummar: any;
  owner: any;
  constructor(
    private route: ActivatedRoute,
    private nodesInfoService: NodesInfoService,
    private loadingSpinnerService: LoadingSpinnerService,
    private providerDetailsService: ProvidersDetailsService
  ) {
    this.subscription = new Subscription();
  }
  async ngOnInit() {
    await this.loadNodeInfo();
    await this.loadProviderSmallData();
  }

  private async loadNodeInfo(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.subscription = this.nodesInfoService.getNodeInfo(this.bls).subscribe(
        (data) => {
          this.nodeInfo = data;
          this.owner = data.owner;
          resolve();
        },
        (error) => {
          console.error('Error fetching nodeInfo:', error);
          reject(error);
        }
      );
    });
  }

  private async loadProviderSmallData() {
    return new Promise<void>((resolve, reject) => {
      this.providerDetailsService.getProviderSmallInfo(this.owner).subscribe(
        (data) => {
          this.providerDetailsSummar = data[0];
          resolve();
        },
        (error) => {
          console.error('Error fetching providerSmallInfo:', error);
          reject(error);
        }
      );
    });
  }

  copyToClipboard(copy: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copy;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
