import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/shared/loading-spinner.service';
import { QueueService } from './queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent {
  currentFrom: number = 0;
  itemsSize: number = 25;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  isLoading$ = this.loadingSpinnerService.isLoading.asObservable();
  subscription: Subscription;
  constructor(
    private queueService: QueueService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingSpinnerService: LoadingSpinnerService
  ) {
    this.subscription = new Subscription();
  }
  displayedColumns: string[] = [
    'position',
    'public_key',
    'name',
    'version',
    'online',
  ];

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'] || 1;
        this.currentFrom = (page - 1) * this.itemsSize;
        this.loadQueue();
      })
    );
  }

  loadQueue() {
    this.subscription.add(
      this.queueService
        .getNodes(this.currentFrom, this.itemsSize)
        .subscribe((data) => {
          console.log(data);
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
