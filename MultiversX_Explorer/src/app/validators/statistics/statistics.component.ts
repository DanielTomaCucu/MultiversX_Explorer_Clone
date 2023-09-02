import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { NodesService } from '../nodes/nodes.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  statistics: any;
  currentFrom: number = 0;
  itemsSize: number = 25;
  dataSource!: MatTableDataSource<any>;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  @ViewChild(MatSort) sort!: MatSort;
  subscription: Subscription;
  constructor(
    private nodesService: NodesService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  displayedColumns: string[] = [
    'public_key',
    'name',
    'leaderSuccess',
    'leaderFailure',
    'validatorSuccess',
    'validatorFailure',
    'validatorIgnoredSignatures',
    'tempRating',
  ];

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.loadStatistics();
      })
    );
  }

  loadStatistics() {
    this.subscription.add(
      this.nodesService
        .getNodes(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          this.statistics = data;
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        })
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
