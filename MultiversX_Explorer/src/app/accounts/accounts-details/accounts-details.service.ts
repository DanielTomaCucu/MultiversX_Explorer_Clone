import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class AccountsDetailsService {
  private accountDetails = `${environment.baseUrl}/accounts/{address}`;
  private accountTokens = `${environment.baseUrl}/accounts/{address}/tokens/count`;
  private stakeAmount = `${environment.baseUrl}/accounts/{address}/stake`;
  private nftAmount = `${environment.baseUrl}/accounts/{address}/nfts/count`;
  private transactions = `${environment.baseUrl}/accounts`;
  address!: Observable<any>;

  constructor(private http: HttpClient) {}

  getAccountDetails(address: any): Observable<any> {
    const addr = this.accountDetails.replace('{address}', address);
    return this.http.get<any>(addr);
  }
  getTokensCount(address: any): Observable<any> {
    const addr = this.accountTokens.replace('{address}', address);
    return this.http.get<any>(addr);
  }
  getStakeAmount(address: string): Observable<any> {
    const addr = this.stakeAmount.replace('{address}', address);
    return this.http.get<any>(addr);
  }
  getNftCount(address: any): Observable<any> {
    const addr = this.nftAmount.replace('{address}', address);
    return this.http.get<any>(addr);
  }
  getTransactions(address: string): Observable<any> {
    return this.http.get<any>(
      `${this.transactions}/${address}/transactions?withUsername=true`
    );
  }
}
