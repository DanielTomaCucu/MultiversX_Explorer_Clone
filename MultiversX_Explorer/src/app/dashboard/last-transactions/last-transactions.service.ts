import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class LastTransactionsService {
  private transactions = `${environment.baseUrl}/transactions?size=5&withUsername=true`;
  constructor(private http: HttpClient) {}
  getTransactions(): Observable<any> {
    return this.http.get<any>(this.transactions);
  }
}
