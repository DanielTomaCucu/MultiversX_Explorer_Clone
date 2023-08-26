import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private accountsCount = `${environment.baseUrl}/accounts/count`;
  private totalStake = `${environment.baseUrl}/stake`;
  private accountsList = `${environment.baseUrl}/accounts?size=50`;
  
  constructor(private http: HttpClient) {}
  getTotalAccounts(): Observable<any> {
    return this.http.get<any>(this.accountsCount);
  }
  getTotalStake(): Observable<any> {
    return this.http.get<any>(this.totalStake);
  }
  getAccountsList(): Observable<any> {
    return this.http.get<any>(this.accountsList);
  }
}
