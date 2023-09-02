import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { NodesService } from './nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
})
export class NodesComponent {
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();

  @ViewChild(MatSort) sort!: MatSort;
  activeFilter: string = '';
  dataSource!: MatTableDataSource<any>;
  filters: any = {
    type: null,
    issues: null,
    fullHistory: null,
    status: null,
  };
  currentFrom: number = 0;
  itemsSize: number = 25;
  subscription: Subscription;
  constructor(
    private nodesService: NodesService,
    private loadingSpinnerService: LoadingSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscription = new Subscription();
  }

  displayedColumns: string[] = [
    'public_key',
    'name',
    'shard',
    'version',
    'ignored_signatures',
    'status',
    'rating',
    'nonce',
  ];

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        Object.keys(this.filters).forEach((key) => {
          if (params[key]) {
            this.filters[key] = params[key];
          }
        });
        this.fetchData();
      })
    );
  }

  fetchData(): void {
    this.subscription.add(
      this.nodesService
        .getNodes(this.currentFrom, this.itemsSize, this.filters)
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
        })
    );
  }
  isActive(filterName: string, filterValue?: any): boolean {
    if (filterName === 'all') {
      return (
        !this.filters.type &&
        !this.filters.issues &&
        !this.filters.fullHistory &&
        !this.filters.status
      );
    }

    if (filterName === 'type') {
      return this.filters[filterName] === filterValue;
    }
    return this.filters[filterName];
  }

  onFilterClick(filterName: string = 'all', filterValue?: any): void {
    this.filters = {
      type: null,
      issues: null,
      fullHistory: null,
      status: null,
    };

    if (filterName !== 'all') {
      this.filters[filterName] = filterValue;
    }
    this.activeFilter = filterName + (filterValue ? `-${filterValue}` : '');

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...this.filters, page: 1 },
      queryParamsHandling: 'merge',
    });

    this.fetchData();
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
      queryParams: { ...this.filters, page: page },
      queryParamsHandling: 'merge',
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
