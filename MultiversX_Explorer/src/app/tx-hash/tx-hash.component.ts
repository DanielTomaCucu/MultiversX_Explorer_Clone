import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TxHashService } from './tx-hash.service';

@Component({
  selector: 'app-tx-hash',
  templateUrl: './tx-hash.component.html',
  styleUrls: ['./tx-hash.component.scss'],
})
export class TxHashComponent {
  txHashDetails: any;
  constructor(
    private txHashService: TxHashService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const txHash: string | null = this.route.snapshot.paramMap.get('txHash');
    this.txHashService
      .getTxHash(txHash)
      .subscribe((data) => console.log(data.data.transaction));
  }
}
