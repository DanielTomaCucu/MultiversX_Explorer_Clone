import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
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
  constructor(
    private route: ActivatedRoute,
    private nodesInfoService: NodesInfoService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription = this.nodesInfoService
      .getNodeInfo(this.bls)
      .subscribe((data) => {
        console.log(data);
        this.nodeInfo = data;
      });
  }

  copyToClipboard(copy:string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value =copy
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
