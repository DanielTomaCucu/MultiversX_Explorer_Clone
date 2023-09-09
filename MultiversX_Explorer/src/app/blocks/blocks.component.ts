import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from '../shared/loading-spinner.service';
import { BlocksService } from './blocks.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent {
  dataSource!: MatTableDataSource<any>;
  currentFrom: number = 0;
  itemsSize: number = 25;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  subscription: Subscription;
  constructor(
    private blocksService: BlocksService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  displayedColumns: string[] = [
    'block',
    'age',
    'txns',
    'shard',
    'size',
    'gas_used',
    'block_hash',
    'leader',
  ];

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.getBlocks();
      })
    );
  }

  getBlocks() {
    this.subscription.add(
      this.blocksService
        .getBlocks(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
        })
    );
  }
  redirectToBlocks() {
    this.router.navigate(['transactions']);
  }
  bytesToKB(bytes: number, decimalPlaces: number = 2): number {
    const result = bytes * 0.001;
    return parseFloat(result.toFixed(decimalPlaces));
  }
  computeGasPercentage(row: any): number {
    const { gasConsumed, gasPenalized, gasRefunded, maxGasLimit } = row;
    return ((gasConsumed + gasPenalized - gasRefunded) / maxGasLimit) * 100;
  }
  nextPage() {
    const nextPage = this.currentFrom / this.itemsSize + 2;
    this.updatePage(nextPage);
  }

  prevPage() {
    const prevPage = this.currentFrom / this.itemsSize;
    if (prevPage > 0) {
      this.updatePage(prevPage);
    }
  }

  updatePage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: 'merge',
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
