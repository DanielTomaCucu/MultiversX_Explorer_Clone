import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  private marketcap = `${environment.baseUrl}/economics`;
  private totalTokens = `${environment.baseUrl}/tokens/count`;
  private transactions = `${environment.baseUrl}/transactions/count`;
  constructor(private http: HttpClient) {}

  getMarketcap(): Observable<any> {
    return this.http.get<any>(this.marketcap);
  }
  getTotalTokens(): Observable<any> {
    return this.http.get<any>(this.totalTokens);
  }
  getTransactions(): Observable<any> {
    return this.http.get<any>(this.transactions);
  }
}
