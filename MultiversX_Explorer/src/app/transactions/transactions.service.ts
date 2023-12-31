import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactions = `${environment.baseUrl}/transactions`;
  constructor(private http: HttpClient) {}
  getTransactions(from:number,size:number ): Observable<any> {
    return this.http.get<any>(
      `${this.transactions}?from=${from}&size=${size}&withUsername=true`
    );
  }
}
