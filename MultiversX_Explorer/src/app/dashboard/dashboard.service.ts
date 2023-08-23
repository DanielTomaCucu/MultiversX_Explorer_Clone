import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private accountsCountAPI = `${environment.baseUrl}/accounts/count`;
  private blocksCount = `${environment.baseUrl}/blocks/count`;
  private transactionsCount = `${environment.baseUrl}/transactions/count`;
  private validatorsCount = `${environment.baseUrl}/nodes/count?online=true&type=validator`;

  constructor(private http: HttpClient) {}

  getAccountsCounts(): Observable<any> {
    return this.http.get<any>(this.accountsCountAPI);
  }

  getBlocksCount(): Observable<any> {
    return this.http.get<any>(this.blocksCount);
  }
  getTransactionsCount(): Observable<any> {
    return this.http.get<any>(this.transactionsCount);
  }
  getValidatorsCount(): Observable<any>{
    return this.http.get<any>(this.validatorsCount)
  }
}
