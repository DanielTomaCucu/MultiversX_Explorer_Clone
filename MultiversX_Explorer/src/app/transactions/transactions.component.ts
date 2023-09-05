import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  dataSource!: MatTableDataSource<any>;
  constructor(private transactionsService: TransactionsService) {}
  displayedColumns: string[] = [
    'txn_hash',
    'age',
    'shard',
    'from',
    'to',
    'method',
  ];

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }
  containsManyQs(address: string): boolean {
    const pattern = /q{10,}/;
    return pattern.test(address);
  }
}
